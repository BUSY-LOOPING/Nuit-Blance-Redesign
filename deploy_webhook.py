from flask import Flask, request
import subprocess
import hmac
import hashlib
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

GITHUB_SECRET = os.getenv("GITHUB_SECRET", "").encode()
print("Using GITHUB_SECRET:", GITHUB_SECRET)

def verify_signature(data, signature_header):
    if not GITHUB_SECRET or not signature_header:
        return True  # no verification if secret not set

    sha_name, signature = signature_header.split('=')
    if sha_name != 'sha256':
        return False

    mac = hmac.new(GITHUB_SECRET, msg=data, digestmod=hashlib.sha256)
    return hmac.compare_digest(mac.hexdigest(), signature)


@app.route('/webhook', methods=['POST'])
def webhook():
    signature = request.headers.get('X-Hub-Signature-256')
    if not verify_signature(request.data, signature):
        return 'Signature mismatch', 403

    try:
        print("🔄 Pulling latest changes...")
        subprocess.run(
            "cd /app && git pull origin main",
            shell=True,
            check=True
        )

        print("🔨 Rebuilding Docker image...")
        subprocess.run(
            "docker compose build",
            shell=True,
            check=True
        )

        print("🚀 Restarting container...")
        subprocess.run(
            "docker compose up -d",
            shell=True,
            check=True
        )

        return '✅ Deployed successfully', 200

    except subprocess.CalledProcessError as e:
        print("❌ Deployment error:", e)
        return f'❌ Deployment failed: {e}', 500


@app.route('/')
def health_check():
    return 'Webhook server is running.', 200


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)

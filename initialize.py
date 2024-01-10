import subprocess

def handler(event, context):
    subprocess.run(["python", "-m", "spacy", "download", "en_core_web_sm"])

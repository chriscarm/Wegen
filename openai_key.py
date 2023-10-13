"""
Module to set OpenAI API key from environment variable.
"""

import openai
import os

# Set OpenAI API Key from environment variable
openai.api_key = os.getenv("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")

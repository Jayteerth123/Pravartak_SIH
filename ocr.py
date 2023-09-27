from pdf2image import convert_from_path
from PIL import Image
import pytesseract


pdf_file = 'EAadhaar.pdf'  # Replace with your PDF file path
images = convert_from_path(pdf_file)# Convert the PDF to a list of images

# Perform OCR on each image
for i, image in enumerate(images):
   
    text = pytesseract.image_to_string(image)#main ocr code

    
    print(f"Page {i + 1} text:\n{text}")#process extracted data

  
    image.save(f'page_{i + 1}.png', 'PNG')#save image

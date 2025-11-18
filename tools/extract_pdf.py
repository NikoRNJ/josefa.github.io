import fitz
import json
import os

SRC=r"c:\Users\Nikoder\Desktop\Programacion\proyectos\portafolioJosefa\Portafolio (3).pdf"
ROOT=os.path.dirname(os.path.dirname(__file__))
IMG_DIR=os.path.join(ROOT,'assets','images','portfolio')
DATA_DIR=os.path.join(ROOT,'data')
RAW_TXT=os.path.join(DATA_DIR,'portfolio_raw.txt')
OUT_JSON=os.path.join(DATA_DIR,'portfolio.json')

os.makedirs(IMG_DIR,exist_ok=True)
os.makedirs(DATA_DIR,exist_ok=True)

doc=fitz.open(SRC)
texts=[]
images=[]
for p in range(doc.page_count):
    page=doc.load_page(p)
    texts.append(page.get_text())
    for img in page.get_images(full=True):
        xref=img[0]
        base=doc.extract_image(xref)
        ext=base.get('ext','png')
        content=base['image']
        fname=f"page-{p+1}-img-{xref}.{ext}"
        out=os.path.join(IMG_DIR,fname)
        with open(out,'wb') as f:
            f.write(content)
        images.append({"file":os.path.relpath(out,ROOT).replace('\\','/'),"page":p+1})

with open(RAW_TXT,'w',encoding='utf-8') as f:
    for i,t in enumerate(texts,1):
        f.write(f"\n\n--- PAGE {i} ---\n")
        f.write(t)

data={
    "source":SRC,
    "pages":doc.page_count,
    "raw_text_file":os.path.relpath(RAW_TXT,ROOT).replace('\\','/'),
    "images":images
}
with open(OUT_JSON,'w',encoding='utf-8') as f:
    json.dump(data,f,ensure_ascii=False,indent=2)
print("OK",len(images),"images",doc.page_count,"pages")
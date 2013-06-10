PDFS := $(wildcard *.md)
	
all : $(PDFS)
	
%.pdf : %.md
	pandoc $< -o $@ \
	-t beamer \
	--latex-engine=xelatex \
	-V mainfont="inconsolata" \
	--slide-level=2
	xdg-open $@
 
clean :
	rm $(PDFS)
 
rebuild : clean all
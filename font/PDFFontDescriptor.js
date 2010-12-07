function PDFFontDescriptor(obj) {
	if(obj instanceof COSDictionary) {
		// required parameters
		this.ascent = obj.getDictionaryObject("Ascent").value;
		this.capHeight = obj.getDictionaryObject("CapHeight").value;
		this.descent = obj.getDictionaryObject("Descent").value;
		this.flags = obj.getDictionaryObject("Flags").value;
		this.fontName = obj.getDictionaryObject("FontName").name;
		this.italicAngle = obj.getDictionaryObject("ItalicAngle").value;
		this.stemV = obj.getDictionaryObject("StemV").value;

		// font bounding box
	/* 	
		// TODO
		PDFObject[] bboxdef = obj.getDictionaryObject("FontBBox").getArray();
		float[] bboxfdef = new float[4];
		for (int i = 0; i < 4; i++) {
			bboxfdef[i] = bboxdef[i].getFloatValue();
		}
		this.FontBBox(new Rectangle2D.Float(bboxfdef[0], bboxfdef[1],
				bboxfdef[2] - bboxfdef[0],
				bboxfdef[3] - bboxfdef[1])); */

		// optional parameters
		this.avgWidth = getValueOrNull("AvgWidth") || 0;
		this.fontFile = getValueOrNull("FontFile");
		this.fontFile2 = getValueOrNull("FontFile2");
		this.fontFile3 = getValueOrNull("FontFile3");
		this.leading = getValueOrNull("Leading") || 0;
		this.maxWidth = getValueOrNull("MaxWidth") || 0;
		this.missingWidth = getValueOrNull("MissingWidth") || 0;
		this.stemH = getValueOrNull("StemH") || 0;
		this.xHeight = getValueOrNull("XHeight") || 0;
		this.charSet = getValueOrNull("CharSet");
		this.fontFamily = getValueOrNull("FontFamily");
		this.fontWeight = getValueOrNull("FontWeight");
		this.fontStretch = getValueOrNull("FontStretch");
	
	} else {
		this.fontName = obj;
	}
	function getValueOrNull(key) {
		var test = obj.getDictionaryObject(key);
		if(test == null)
			return null;
		else if(test instanceof COSNumber)
			return test.value;
		else if(test instanceof COSName)
			return test.name;
		else
			return test;
	}
}
PDFFontDescriptor.PLAIN = 0;
PDFFontDescriptor.BOLD = 1;
PDFFontDescriptor.ITALIC = 2;
/** All glyphs have the same width. */
PDFFontDescriptor.FIXED_PITCH = 1 << (1-1);
/** Glyphs have serifs. */
PDFFontDescriptor.SERIF = 1 << (2-1);
/** Font contains glyphs outside the Adobe standard Latin. */
PDFFontDescriptor.SYMBOLIC = 1 << (3-1);
/** Glyphs resemble cursive handwriting. */
PDFFontDescriptor.SCRIPT = 1 << (4-1);
/** Font uses the Adobe standard Latic character set. */
PDFFontDescriptor.NONSYMBOLIC = 1 << (6-1);
/** Glyphs have dominant vertical strokes that are slanted. */
PDFFontDescriptor.ITALIC = 1 << (7-1);
/** Font contains no lowercase letters. */
PDFFontDescriptor.ALLCAP = 1 << (17-1);
/** Font contains both uppercase and lowercase letters.. */
PDFFontDescriptor.SMALLCAP = 1 << (18-1);
/** Determines whether bold glyphs shall be painted with
 * extra pixels even at very small text sizes. */
PDFFontDescriptor.FORCEBOLD = 1 << (19-1);
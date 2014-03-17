<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

  <xsl:output method="html" version="4.0" encoding="utf-8"/>
  
  <xsl:template match="page">
    <html>
      <head>
        <title>
          <xsl:value-of select="@title"/>
        </title>
      </head>
      <body>
        <div>
          <xsl:value-of select="content"/>
        </div>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>

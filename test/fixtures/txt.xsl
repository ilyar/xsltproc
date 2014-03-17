<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

  <xsl:output encoding="utf-8" indent="no" method="text"/>
  
  <xsl:template match="page">
    <xsl:value-of select="@title"/>
  </xsl:template>

</xsl:stylesheet>

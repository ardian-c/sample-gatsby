import React from "react"
import { Helmet } from "react-helmet"
import LogoFull from "../images/home/logo.jpg"

class HelmetEx extends React.Component {
  constructor(props) {
    super(props)
    this._webAddress = process.env.GATSBY_STRYDEBIKE_WEBSITE_ADDRESS
    this._metadata = {}
    const $this = this
    React.Children.forEach(props.children, (element, index) => {
      if (
        element &&
        element.props &&
        element.props.metadata &&
        element.props.children
      ) {
        $this._metadata[element.props.metadata] = element.props.children
      }
    })
  }

  render = () => {
    return (
      <Helmet>
        <title>{this._metadata.title}</title>
        <link rel="alternate" href={this._metadata.path} hreflang="en-us" />
        <html lang="en" href={this._metadata.path} />
        <meta name="description" content={this._metadata.description} />
        <meta name="keywords" content={this._metadata.keywords} />
        <meta property="og:title" content={this._metadata.title} />
        <meta property="og:description" content={this._metadata.description} />
        <meta
          property="og:image"
          content={this._webAddress + (this._metadata.image || LogoFull)}
        />
        <meta property="og:type" content={this._metadata.type || "website"} />(
        {this._metadata.canonicalurl && (
          <link
            rel="canonical"
            href={this._webAddress + (this._metadata.canonicalurl || "")}
          />
        )}
        ){this.props.noIndex && <meta name="robots" content="noindex" />}
      </Helmet>
    )
  }
}

export const MetadataElement = ({ children, metadata }) => {
  return <div id={metadata}>{children}</div>
}

export default HelmetEx

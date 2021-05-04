import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const SEO = ({ title, description, author, keywords }) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => {
        const metaDescription =
          description || data.site.siteMetadata.description;
        const metaTitle = title || data.site.siteMetadata.title;
        const metaAuthor = author || data.site.siteMetadata.author;
        const metaKeywords = keywords || data.site.siteMetadata.metaKeywords;

        return (
          <Helmet
            title={title}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                name: `title`,
                content: metaTitle,
              },
              {
                name: `author`,
                content: metaAuthor,
              },
            ]}
          ></Helmet>
        );
      }}
    ></StaticQuery>
  );
};

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        metaKeywords
      }
    }
  }
`;

export default SEO;

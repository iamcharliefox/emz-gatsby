/**
 * Archive component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql, Link } from "gatsby"

const POST_ARCHIVE_QUERY = graphql `


        query BlogPostArchive{
        allMediumPost(sort: { fields: [createdAt], order: DESC }) {
            edges {
            node {
                id
                title
                uniqueSlug
                virtuals {
                subtitle
                previewImage {
                    imageId
                }
                }
                author {
                name
                }
            }
            }
        }
        }


    `

const ArchiveList = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    a {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        font-size: 0.8rem;
        text-decoration: underline;
        color: navy;        
    }
`;


const Archive = () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({allMediumPost}) => (
      <>
        <aside>
            <h3>Archive</h3>    
            <ArchiveList>
            {allMediumPost.edges.map(edge => (
                <li>
                    <a href={`https://medium.com/@EmilyFox/${edge.node.uniqueSlug}`}>
                    {edge.node.title}
                    </a>
                        

                </li>
            ))}
            </ArchiveList>
        </aside>
      </>
    )}
  />
)

export default Archive

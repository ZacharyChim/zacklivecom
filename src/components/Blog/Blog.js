import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";
import { FaArrowRight } from "react-icons/fa/";
import { FaArrowLeft } from "react-icons/fa/";
import Item from "./Item";

const Blog = props => {
  const { posts, theme, index, numPages } = props;
  const prev = index > 1;
  const next = index < numPages;

  return (
    <React.Fragment>
      <main className="main">
        <ul>
          {posts.map(post => {
            const {
              node,
              node: {
                fields: { slug }
              }
            } = post;
            return <Item key={slug} post={node} theme={theme} />;
          })}
          <div className="links">
            {prev && (
              <Link to={`/${index > 2 ? index - 1 : ""}`}>
                <FaArrowLeft />
                <h4>Previous</h4>
              </Link>
            )}

            <ul
              style={{
                display: "flex",
                flexWrap: "wrap",
                maxWidth: "700px",
                margin: "0 auto",
                alignItems: "center",
                listStyle: "none",
                padding: 0,
                lineHeight: "30px"
              }}
            >
              {Array.from({ length: numPages }, (_, i) => (
                <li
                  key={`pagination-number${i + 1}`}
                  style={{
                    margin: 0
                  }}
                >
                  <Link
                    to={`/${i === 0 ? "" : i + 1}`}
                    style={{
                      padding: "3px 8px",
                      borderRadius: "5px",
                      textDecoration: "none",
                      color: i + 1 === index ? "#ffffff" : "",
                      background: i + 1 === index ? "#007acc" : ""
                    }}
                  >
                    {i + 1}
                  </Link>
                </li>
              ))}
            </ul>
            {next && (
              <Link to={`/${index + 1}`}>
                <h4>Next</h4>
                <FaArrowRight />
              </Link>
            )}
          </div>
        </ul>
      </main>

      {/* --- STYLES --- */}
      <style jsx>{`
        .main {
          padding: 0 ${theme.space.inset.default};
        }

        ul {
          list-style: none;
          margin: 0 auto;
          padding: ${`calc(${theme.space.default} * 1.5) 0 calc(${theme.space.default} * 0.5)`};
        }

        @above tablet {
          .main {
            padding: 0 ${`0 calc(${theme.space.default} * 1.5)`};
          }
          ul {
            max-width: ${theme.text.maxWidth.tablet};
          }
        }
        @above desktop {
          ul {
            max-width: ${theme.text.maxWidth.desktop};
          }
        }

        .links {
          display: flex;
          flex-direction: column;
          padding: 0 ${theme.space.m} ${theme.space.l};
          border-bottom: 1px solid ${theme.line.color};
          margin: ${theme.space.stack.l};

          :global(a) {
            display: flex;
            justify-content: center;
          }

          :global(a:nth-child(2)) {
            margin: ${theme.space.default} 0 0;
            justify-content: center;
          }

          :global(svg) {
            fill: ${theme.color.special.attention};
            width: ${theme.space.m};
            height: ${theme.space.m};
            flex-shrink: 0;
            flex-grow: 0;
            margin: 0 10px;
          }
        }

        h4 {
          font-weight: 600;
          margin: 0;
          font-size: 1.1em;
        }

        @from-width desktop {
          .links {
            flex-direction: row;
            justify-content: center;

            :global(a) {
              flex-basis: 33%;
            }

            :global(a:nth-child(2)) {
              margin: 0;
            }
            :global(svg) {
              transition: all 0.5s;
              margin: 0 10px;
            }
          }

          @media (hover: hover) {
            .links :global(a:hover svg) {
              transform: scale(1.5);
            }
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Blog.propTypes = {
  posts: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired,
  index: PropTypes.object.isRequired,
  numPages: PropTypes.object.isRequired
};

export default Blog;

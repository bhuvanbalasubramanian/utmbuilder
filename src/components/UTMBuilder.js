import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaSave } from "react-icons/fa";

export const UTMBuilder = () => {
  const [utmlink, setUtmlink] = useState("");
  const [copied, setCopied] = useState(false);
  const [domain, setDomain] = useState("");
  const [source, setSource] = useState("");
  const [medium, setMedium] = useState("");
  const [campaign, setCampaign] = useState("");
  const [term, setTerm] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (domain)
      setUtmlink(domain + source + medium + campaign + term + content);
    else setUtmlink("");
  }, [domain, source, medium, campaign, term, content]);

  const handleChange = (e) => {
    const value = e.target.value;
    const id = e.target.id;

    if (id === "domain") value ? setDomain(`${value}?`) : setDomain(``);
    if (id === "source")
      value ? setSource(`&utm_source=${value}`) : setSource("");
    if (id === "medium")
      value ? setMedium(`&utm_medium=${value}`) : setMedium("");
    if (id === "campaign")
      value ? setCampaign(`&utm_campaign=${value}`) : setCampaign("");
    if (id === "term") value ? setTerm(`&utm_term=${value}`) : setTerm("");
    if (id === "content")
      value ? setContent(`&utm_content=${value}`) : setContent("");

      setCopied(false);
  };

  return (
    <section className="container">
      <div className="row justify-content-md-center">
        <div className="col-10">
          <form>
            <div className="row mb-3 align-items-center">
              <div className="col-3">
                <label htmlFor="domain" className="col-form-label">
                  Website URL <span className="mandatory-star">*</span>
                </label>
              </div>
              <div className="col-5">
                <input
                  type="text"
                  id="domain"
                  className="form-control"
                  aria-describedby="passwordHelpInline"
                  onChange={handleChange}
                />
              </div>
              <div className="col-4">
                <span id="passwordHelpInline" className="form-text">
                  (https://www.example.com)
                </span>
              </div>
            </div>

            <div className="row mb-3 align-items-center">
              <div className="col-3">
                <label htmlFor="source" className="col-form-label">
                  UTM Source <span className="mandatory-star">*</span>
                </label>
              </div>
              <div className="col-5">
                <input
                  type="text"
                  id="source"
                  className="form-control"
                  aria-describedby="passwordHelpInline"
                  onChange={handleChange}
                />
              </div>
              <div className="col-4">
                <span id="passwordHelpInline" className="form-text">
                  (google, newsletter, social)
                </span>
              </div>
            </div>

            <div className="row mb-3 align-items-center">
              <div className="col-3">
                <label htmlFor="medium" className="col-form-label">
                  UTM Medium <span className="mandatory-star">*</span>
                </label>
              </div>
              <div className="col-5">
                <input
                  type="text"
                  id="medium"
                  className="form-control"
                  aria-describedby="passwordHelpInline"
                  onChange={handleChange}
                />
              </div>
              <div className="col-4">
                <span id="passwordHelpInline" className="form-text">
                  (cpc, banner, email, campaign, ad)
                </span>
              </div>
            </div>

            <div className="row mb-3 align-items-center">
              <div className="col-3">
                <label htmlFor="campaign" className="col-form-label">
                  Campaign Name <span className="mandatory-star">*</span>
                </label>
              </div>
              <div className="col-5">
                <input
                  type="text"
                  id="campaign"
                  className="form-control"
                  aria-describedby="passwordHelpInline"
                  onChange={handleChange}
                />
              </div>
              <div className="col-4">
                <span id="passwordHelpInline" className="form-text">
                  (blackfriday_promo, newyear)
                </span>
              </div>
            </div>

            <div className="row mb-3 align-items-center">
              <div className="col-3">
                <label htmlFor="term" className="col-form-label">
                  Campaign Term
                </label>
              </div>
              <div className="col-5">
                <input
                  type="text"
                  id="term"
                  className="form-control"
                  aria-describedby="passwordHelpInline"
                  onChange={handleChange}
                />
              </div>
              <div className="col-4"></div>
            </div>

            <div className="row mb-3 align-items-center">
              <div className="col-3">
                <label htmlFor="content" className="col-form-label">
                  Campaign Content
                </label>
              </div>
              <div className="col-5">
                <input
                  type="text"
                  id="content"
                  className="form-control"
                  aria-describedby="passwordHelpInline"
                  onChange={handleChange}
                />
              </div>
            </div>
          </form>
          <div className="row mb-3 align-items-center mt-4 text-center">
              <h3 className="mb-4">Generated UTM campaign URL</h3>
              <p className='small'>Share the below url in social media, ad campaign, and view the traffic in Google Analytics.</p>
             
            <textarea className="form-control" defaultValue={utmlink} />

            {!copied ? (
              <CopyToClipboard text={utmlink} onCopy={() => setCopied(true)}>
                <button type="button" className="btn btn-secondary mt-3">
                  <FaSave /> Copy URL
                </button>
              </CopyToClipboard>
            ) : (
              <button type="button" className="btn btn-secondary mt-3">
                Copied!
              </button>
            )}
          </div>
        </div>
      </div>
      <hr />
    </section>
  );
};

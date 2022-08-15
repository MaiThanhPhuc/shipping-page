import NavBar from "~/components/NavBar/index";
import styles from "./index.module.scss";
import classNames from "classnames/bind";
import Button from "~/components/Button";
import images from "~/assets/images";
import icons from "~/assets/icons";
const cx = classNames.bind(styles);
const listServices = [
  {
    icon: icons.box,
    name: "Next day delivery",
    body: "We will deliver your product in the next day of your order. Deliver it to door.",
  },
  {
    icon: icons.lock,
    name: "Safe and secure",
    body: "We can also arrange for a friendly, courier to collect your product.",
  },
  {
    icon: icons.cardboard,
    name: "Drop off any parcelshop",
    body: "We also offer a parcel just tell us where you’d like your parcel collecting.",
  },
];
const listDiscover = [
  {
    name: "Offer",
    body: "Safe place delivery photo confirmation.",
  },
  {
    name: "Security",
    body: "Divert to a neighbour or safe place.",
  },
  {
    name: "Real time",
    body: "Regular, real-time tracking information.",
  },
  {
    name: "Payment",
    body: "A delivery time window on the day.",
  },
];
const listFooter = [
  ["Features", "Remote Teams", "Pricing", "Integrations", "API"],
  [
    "Downloads",
    "Help Center",
    "Twist Guides",
    "Remote Work Guides",
    "Twist vs.Slack",
  ],
  ["About Doist", "Press", "Todoist", "We are hiring!"],
];
const LandingPage = () => {
  return (
    <>
      <div className={cx("container")}>
        <div className={cx("header-wrapper")}>
          <div className={cx("header-nav")}>
            <NavBar />
          </div>
          <div className={cx("header-main")}>
            <div className={cx("header-content")}>
              <h1 className={cx("global-caption")}>
                We bring the <span className={cx("expert")}>Percel</span> to
                your doorstep.
              </h1>
              <h5 className={cx("global-subCaption")}>
                Save time tackling your to-do list at home, at work, or on the
                go.
              </h5>
              <div className={cx("header-actions")}>
                <div className={cx("header-actions-button")}>
                  <Button primary medium>
                    Learn More
                  </Button>
                  <Button link>Sign Up For Free</Button>
                </div>
                <div className={cx("header-actions-checkbox")}>
                  <input id="noCredit" type="checkbox" />
                  <label htmlFor="noCredit"></label>
                  <p>No credit card required</p>
                </div>
              </div>
            </div>

            <div className={cx("header-image")}>
              <img alt="illustrator" src={images.illustration} />
            </div>
          </div>
        </div>
        <div className={cx("service-wrapper")}>
          <div className={cx("service-header")}>
            <h1>What we provide</h1>
          </div>
          <div className={cx("service-body")}>
            <div className={cx("service-body-list")}>
              <div className={cx("ellipse-start")}></div>
              <div className={cx("ellipse-end")}></div>
              <div className={cx("service-body-item")}>
                <div className={cx("icon", "icon-blue")}>
                  <img src={listServices[0].icon} alt="icon" />
                </div>

                <div className={cx("name")}>{listServices[0].name}</div>
                <div className={cx("body")}>{listServices[0].body}</div>
              </div>
              <div className={cx("service-body-item")}>
                <div className={cx("icon", "icon-orange")}>
                  <img src={listServices[1].icon} alt="icon" />
                </div>

                <div className={cx("name")}>{listServices[1].name}</div>
                <div className={cx("body")}>{listServices[1].body}</div>
              </div>
              <div className={cx("service-body-item")}>
                <div className={cx("icon", "icon-yellow")}>
                  <img src={listServices[2].icon} alt="icon" />
                </div>

                <div className={cx("name")}>{listServices[2].name}</div>
                <div className={cx("body")}>{listServices[2].body}</div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("feature-wrapper")}>
          <div className={cx("feature-main")}>
            <div className={cx("feature-image")}>
              <img src={images.illustration2} alt="boxes" />
            </div>
            <div className={cx("feature-content")}>
              <div className={cx("feature-header")}>
                Keeping everything safe and gibing quality services to you.
              </div>
              <div className={cx("feature-body")}>
                If you send lots of parcels you can sort it in seconds by
                connecting your Hermes account with eBay, Amazon and Shopify.
                You can also upload a CSV file - whatever's easiest!
              </div>
            </div>
          </div>
        </div>
        <div className={cx("discover-wrapper")}>
          <div className={cx("discover-background")}>
            <div className={cx("discover-main")}>
              <div className={cx("discover-content")}>
                <div className={cx("discover-content-header")}>
                  Discover the joy of having a lot on your service.
                </div>
                <div className={cx("discover-content-list")}>
                  <div className={cx("discover-content-items")}>
                    <h1>{listDiscover[0].name}</h1>
                    <div className={cx("wrapper")}>
                      <div className={cx("bar", "bar-blue")}></div>
                      <p>{listDiscover[0].body}</p>
                    </div>
                  </div>
                  <div className={cx("discover-content-items")}>
                    <h1>{listDiscover[1].name}</h1>
                    <div className={cx("wrapper")}>
                      <div className={cx("bar", "bar-orange")}></div>
                      <p>{listDiscover[1].body}</p>
                    </div>
                  </div>
                  <div className={cx("discover-content-items")}>
                    <h1>{listDiscover[2].name}</h1>
                    <div className={cx("wrapper")}>
                      <div className={cx("bar", "bar-primary")}></div>
                      <p>{listDiscover[2].body}</p>
                    </div>
                  </div>
                  <div className={cx("discover-content-items")}>
                    <h1>{listDiscover[3].name}</h1>
                    <div className={cx("wrapper")}>
                      <div className={cx("bar", "bar-yellow")}></div>
                      <p>{listDiscover[3].body}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx("discover-image")}>
                <img src={images.mobile} alt="mobile" />
              </div>
            </div>
          </div>
        </div>
        <div className={cx("testimonial-wrapper")}>
          <div className={cx("testimonial-main")}>
            <div className={cx("testimonial-image")}>
              <img src={images.avatar} alt="avatar" />
              <div className={cx("name-wrapper")}>
                <h3>Samanta Kelley</h3>
                <span>Founder</span>
              </div>
            </div>
            <div className={cx("testimonial-content")}>
              <div className={cx("testimonial-content-body")}>
                “I Love the analytics that lobar.design offersall in one place.
                I Love the analytics at that lobar.design offers all place.,
              </div>
              <div className={cx("testimonial-content-line")}>---</div>
            </div>
          </div>
        </div>
        <div className={cx("newsletter-wrapper")}>
          <div className={cx("newsletter-main")}>
            <div className={cx("ellipse-start")}></div>
            <div className={cx("ellipse-end")}></div>
            <div className={cx("ellipse-point")}>
              <img src={images.points} alt="points" />
            </div>
            <div className={cx("newsletter-main-header")}>
              Want to know about exciting and awsome Offer?
            </div>
            <div className={cx("newsletter-main-action")}>
              <input type="email" placeholder="Enter email address.." />
              <Button primary medium>
                Subcribe
              </Button>
            </div>
          </div>
        </div>
        <div className={cx("footer-wrapper")}>
          <div className={cx("footer-main")}>
            <div className={cx("footer-main-left")}>
              <div className={cx("footer-main-left-logo")}>
                <div className={cx("logo")}>
                  <h2>Besnik</h2>
                  <p className={cx("dot")}>.</p>
                </div>
              </div>
              <div className={cx("footer-main-left-content")}>
                Twist for a more intentional way of working together.
              </div>
              <div className={cx("footer-main-left-socials")}>
                <div className={cx("circle")}>
                  <img src={icons.facebook} alt="facebook" />
                </div>
                <div className={cx("circle")}>
                  <img src={icons.linked} alt="linked" />
                </div>
                <div className={cx("circle")}>
                  <img src={icons.twitter} alt="twitter" />
                </div>
              </div>
            </div>
            <div className={cx("footer-main-right")}>
              <div className={cx("footer-main-right-box")}>
                <div className={cx("footer-main-right-header")}>PRODUCT</div>
                <ul>
                  {listFooter[0].map((item, index) => (
                    <li key={index} className={cx("footer-main-right-item")}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={cx("footer-main-right-box")}>
                <div className={cx("footer-main-right-header")}>RESOURCES</div>
                <ul>
                  {listFooter[1].map((item, index) => (
                    <li key={index} className={cx("footer-main-right-item")}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={cx("footer-main-right-box")}>
                <div className={cx("footer-main-right-header")}>COMPANY</div>
                <ul>
                  {listFooter[2].map((item, index) => (
                    <li key={index} className={cx("footer-main-right-item")}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;

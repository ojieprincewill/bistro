import React from "react";

import "./blog-details.styles.scss";

import Navigation from "../Navigation/navigation.component";
import { BLOG_CONTENT } from "../../assets/blogcontent/blog-content";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { BsDot } from "react-icons/bs";
import { motion } from "framer-motion";

const BlogDetails = () => {
  const { blogId } = useParams();
  const blogContent = BLOG_CONTENT;
  const selectedBlog = blogContent.find((blog) => blog.id === Number(blogId));
  const { image, title, date, author } = selectedBlog;

  if (!selectedBlog) {
    return <div>Blog not found</div>;
  }

  return (
    <>
      <div className="blog-details-cont">
        <Navigation />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="blog-header-cont"
        >
          <p className="blog-header">Bistro Blogs and News</p>
          <p className="blog-sub-header">
            {date}
            <span className="dot">
              <BsDot />
            </span>
            By {author}
          </p>
        </motion.div>
      </div>
      <div className="breadcrumbs">
        <Link
          to="/"
          onClick={() => window.scrollTo(0, 0)}
          className="breadlink"
        >
          Home <span className="arrow">{">"}</span>
        </Link>{" "}
        <Link
          to="/blog"
          onClick={() => window.scrollTo(0, 0)}
          className="breadlink"
        >
          Blog <span className="arrow">{">"}</span>
        </Link>
        <span className="breadtitle">{title}</span>
      </div>
      <div className="blog-details">
        <div className="detail-image-cont">
          <img src={image} alt={title} className="detail-image" />
        </div>
        <div className="blog-details-info">
          <p className="blog-details-header">{title}</p>
          <p className="blog-details-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis,
            ab veniam, amet ut at ipsum accusamus! Libero fugiat reiciendis
            architecto dignissimos, magnam iusto rerum recusandae quidem id
            omnis optio numquam.
          </p>

          <div>
            <blockquote className="blockquote1">
              <span className="quote-mark">"</span>
              <p className="quote-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatem, dolore! Velit necessitatibus quis enim mollitia
                suscipit, libero eligendi perspiciatis, nisi labore modi
                praesentium nihil quidem! Quaerat quibusdam, excepturi mollitia
                cumque!
              </p>
            </blockquote>
            <div>
              <p className="blog-details-text">
                Perspiciatis, tempore, voluptates! Officia minus quas illum nam,
                beatae modi libero, harum aliquid totam quia nostrum blanditiis
                accusamus a, illo unde consectetur! Velit, debitis molestias
                eveniet consequuntur sit temporibus, ullam.
              </p>
              <p className="blog-details-text">
                Nobis maxime perferendis recusandae illo fugit, quas suscipit
                minima exercitationem laborum, amet fuga ipsum vero inventore
                dignissimos a maiores eaque. Nobis in nisi repellendus aliquid
                minima culpa tempore ipsum, pariatur!
              </p>
            </div>
          </div>
          <p className="blog-details-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
            amet, voluptate ipsam sit voluptatibus illo animi expedita eius
            accusantium doloremque quas nam eos, quaerat harum aut excepturi,
            eum perspiciatis omnis!
          </p>
          <p className="blog-details-text">
            Tempore magnam quo reiciendis ullam quibusdam sit laboriosam tenetur
            nobis incidunt. Error culpa corporis aspernatur explicabo esse vero,
            nobis similique eaque quis repellendus dolore maiores! Molestiae
            beatae ratione quia a.
          </p>
          <p className="blog-details-text">
            Beatae quasi, totam officiis iste cum eaque maiores voluptatum qui
            eligendi doloribus pariatur explicabo expedita ullam, veritatis, eos
            libero numquam maxime cupiditate commodi repellat, illo provident!
            Quisquam rerum laudantium excepturi!
          </p>
        </div>
        <div className="detail-image-cont">
          <img
            src="https://preview.colorlib.com/theme/eatery/img/hero_1.jpg.webp"
            alt="hero1"
            className="detail-image"
          />
        </div>
        <div className="blog-details-info">
          <div>
            <blockquote className="blockquote2">
              <span className="quote-mark">"</span>
              <span className="quote-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatem, dolore! Velit necessitatibus quis enim mollitia
                suscipit, libero eligendi perspiciatis, nisi labore modi
                praesentium nihil quidem! Quaerat quibusdam, excepturi mollitia
                cumque!
              </span>
            </blockquote>

            <p className="blog-details-text">
              Et asperiores exercitationem quaerat dolore qui vitae ex commodi
              suscipit amet fugit expedita rem deleniti, reprehenderit cum
              cumque in recusandae fugiat velit enim ipsum, tenetur voluptate!
              At fuga aliquam maiores.
            </p>
            <p className="blog-details-text">
              Saepe eaque in, provident fugit, laudantium doloremque quasi et
              debitis aut possimus eligendi quos doloribus sequi nisi commodi
              soluta minus architecto numquam id. Facilis non iusto hic, cum
              temporibus repellendus.
            </p>
            <p className="blog-details-text">
              Exercitationem animi at quo voluptatum saepe, perferendis quisquam
              sequi, officiis, nostrum laudantium sapiente delectus! Totam,
              cupiditate qui necessitatibus natus assumenda labore adipisci amet
              commodi accusamus esse, itaque obcaecati at libero!
            </p>
          </div>

          <p className="blog-details-text">
            Hic earum accusantium atque quo odit totam unde facere molestias
            laborum enim, obcaecati nulla beatae soluta, sunt nisi impedit non
            laudantium numquam omnis, vitae ratione fugiat nesciunt voluptates
            dolor est.
          </p>
          <p className="blog-details-text">
            Eligendi, repudiandae, quae! Doloremque provident eum earum saepe
            quam? Distinctio delectus sint praesentium sit blanditiis et,
            perferendis itaque totam ab. Eligendi et delectus, nulla aut quaerat
            in non nobis distinctio.
          </p>
          <p className="blog-details-text">
            Veniam nulla unde, rerum aut, porro nihil placeat voluptates
            inventore, laborum tempora dignissimos. Iste, placeat, aut? Quia ea
            tempore, temporibus quam eligendi, voluptates voluptatibus aperiam
            dolorum? Sequi dolorum consequatur accusantium.
          </p>
          <p className="blog-details-text">
            Omnis ipsa rem in magnam earum quaerat, repudiandae inventore eius
            maiores expedita assumenda a, officia dolore rerum! Cum ab
            repudiandae, pariatur corporis voluptates soluta architecto labore
            quasi error voluptate velit.
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;

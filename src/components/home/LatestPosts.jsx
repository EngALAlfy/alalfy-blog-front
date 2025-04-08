import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import LatestPostItem from './LatestPostItem';

const LatestPosts = () => {
  return (
    <section id="latest-posts" className="latest-posts section">
      <SectionTitle 
        title="Latest Posts" 
        description="Check Our | Latest Posts" 
      />

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-4">
            <LatestPostItem 
              image="/img/blog/blog-post-1.webp"
              category="Politics"
              title="Dolorum optio tempore voluptas dignissimos"
              authorImg="/img/person/person-f-12.webp"
              authorName="Maria Doe"
              date="Jan 1, 2022"
              dateTime="2022-01-01"
            />
          </div>

          <div className="col-lg-4">
            <LatestPostItem 
              image="/img/blog/blog-post-2.webp"
              category="Sports"
              title="Nisi magni odit consequatur autem nulla dolorem"
              authorImg="/img/person/person-f-13.webp"
              authorName="Allisa Mayer"
              date="Jun 5, 2022"
              dateTime="2022-01-01"
            />
          </div>

          <div className="col-lg-4">
            <LatestPostItem 
              image="/img/blog/blog-post-3.webp"
              category="Entertainment"
              title="Possimus soluta ut id suscipit ea ut in quo quia et soluta"
              authorImg="/img/person/person-m-10.webp"
              authorName="Mark Dower"
              date="Jun 22, 2022"
              dateTime="2022-01-01"
            />
          </div>

          <div className="col-lg-4">
            <LatestPostItem 
              image="/img/blog/blog-post-4.webp"
              category="Sports"
              title="Non rem rerum nam cum quo minus olor distincti"
              authorImg="/img/person/person-f-14.webp"
              authorName="Lisa Neymar"
              date="Jun 30, 2022"
              dateTime="2022-01-01"
            />
          </div>

          <div className="col-lg-4">
            <LatestPostItem 
              image="/img/blog/blog-post-5.webp"
              category="Politics"
              title="Accusamus quaerat aliquam qui debitis facilis consequatur"
              authorImg="/img/person/person-m-11.webp"
              authorName="Denis Peterson"
              date="Jan 30, 2022"
              dateTime="2022-01-01"
            />
          </div>

          <div className="col-lg-4">
            <LatestPostItem 
              image="/img/blog/blog-post-6.webp"
              category="Entertainment"
              title="Distinctio provident quibusdam numquam aperiam aut"
              authorImg="/img/person/person-f-15.webp"
              authorName="Mika Lendon"
              date="Feb 14, 2022"
              dateTime="2022-01-01"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
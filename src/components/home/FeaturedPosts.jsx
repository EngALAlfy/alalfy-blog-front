import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import FeaturedPostItem from './FeaturedPostItem';

const FeaturedPosts = ({ posts }) => {
  // This would normally use the posts prop, but for now we'll use static content
  return (
    <section id="featured-posts" className="featured-posts section">
      <SectionTitle 
        title="Featured Posts" 
        description="Check Our | Featured Posts" 
      />

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="blog-posts-slider swiper init-swiper">
          <script type="application/json" className="swiper-config">
            {`{
              "loop": true,
              "speed": 800,
              "autoplay": {
                "delay": 5000
              },
              "slidesPerView": 3,
              "spaceBetween": 30,
              "breakpoints": {
                "320": {
                  "slidesPerView": 1,
                  "spaceBetween": 20
                },
                "768": {
                  "slidesPerView": 2,
                  "spaceBetween": 20
                },
                "1200": {
                  "slidesPerView": 3,
                  "spaceBetween": 30
                }
              }
            }`}
          </script>

          <div className="swiper-wrapper">
            <FeaturedPostItem 
              image="/img/blog/blog-post-portrait-1.webp"
              author="Julia Parker"
              date="Jan 15, 2025"
              commentCount={6}
              title="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet"
              content="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce porttitor metus eget lectus consequat, sit amet feugiat magna vulputate."
            />

            <FeaturedPostItem 
              image="/img/blog/blog-post-portrait-2.webp"
              author="Mark Wilson"
              date="Jan 18, 2025"
              commentCount={6}
              title="Sed ut perspiciatis unde omnis iste natus error sit voluptatem"
              content="Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet adipiscing sem neque sed ipsum."
            />

            <FeaturedPostItem 
              image="/img/blog/blog-post-portrait-3.webp"
              author="Sarah Johnson"
              date="Jan 21, 2025"
              commentCount={15}
              title="At vero eos et accusamus et iusto odio dignissimos ducimus"
              content="Nullam dictum felis eu pede mollis pretium integer tincidunt cras dapibus vivamus elementum semper nisi."
            />

            <FeaturedPostItem 
              image="/img/blog/blog-post-portrait-4.webp"
              author="David Brown"
              date="Jan 24, 2025"
              commentCount={10}
              title="Et harum quidem rerum facilis est et expedita distinctio"
              content="Donec quam felis ultricies nec pellentesque eu pretium quis sem nulla consequat massa quis enim."
            />

            <FeaturedPostItem 
              image="/img/blog/blog-post-portrait-5.webp"
              author="Emma Davis"
              date="Jan 27, 2025"
              commentCount={6}
              title="Nam libero tempore, cum soluta nobis est eligendi optio"
              content="Aenean leo ligula porttitor eu consequat vitae eleifend ac enim aliquam lorem ante dapibus in viverra."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
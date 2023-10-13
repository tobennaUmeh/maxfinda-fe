import PostStatistics from "./PostStatistics";

const PostSection = () => {
  return (
    <section className="grid grid-cols-12 gap-3 mt-3">
      <div className="col-span-4">
        <PostStatistics />
      </div>
      <div className="col-span-8">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit
        inventore, accusamus ea nobis illum officiis unde id repudiandae iure!
        Praesentium exercitationem ex officia molestiae corrupti? Quas a
        asperiores possimus officia?
      </div>
    </section>
  );
};

export default PostSection;

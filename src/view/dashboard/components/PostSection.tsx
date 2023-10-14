import { SmallButton } from "../../../components/button/Button";
import PostStatistics from "./PostStatistics";

type PostStatisticsProps = {
  time?: () => number;
};

const PostSection = ({ time = Date.now }: PostStatisticsProps) => {
  const currentTime = Date.now();
  console.log(currentTime);
  const differenceInMinutes = Math.floor((currentTime - time()) / (1000 * 60));

  return (
    <section className="grid grid-cols-12 gap-3 mt-3 ">
      <div className="col-span-4 h-[15rem] bg-white rounded-2xl">
        <p className="text-center mt-3 text-2xl">Post Statistics</p>
        <PostStatistics />
      </div>
      <div className="col-span-8 bg-white rounded-2xl px-7 py-3">
        <div className="flex justify-between">
          <div className="">Found {differenceInMinutes} minutes ago</div>
          <div className="flex gap-3">
            <div className="">Job Related</div>
            <input type="radio" />
          </div>
        </div>
        <p className="text-2xl">Post Body</p>
        <p className="text-highlight-100">
          From : https://www.facebook.com/dominioncity.cc
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde optio
          nulla nam labore, quod incidunt animi. Iure, in voluptates quo alias
          rerum, omnis molestiae libero quisquam magnam suscipit placeat vel.
        </p>
        <div className="text-center">
          <SmallButton text="View Posts" />
        </div>
      </div>
    </section>
  );
};

export default PostSection;

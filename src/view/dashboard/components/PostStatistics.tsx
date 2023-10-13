import React from "react";
import { PieChart, Pie } from "recharts";

const PostStatistics = () => {
  // Sample data
  const data = [
    { name: "Geeksforgeeks", students: 400 },
    { name: "Technical scripter", students: 700 },
    { name: "Geek-i-knack", students: 200 },
    { name: "Geek-o-mania", students: 1000 },
  ];

  return (
    <PieChart width={700} height={700}>
      <Pie
        data={data}
        dataKey="PostStatistics"
        outerRadius={250}
        innerRadius={150}
        fill="green"
      />
    </PieChart>
  );
};

export default PostStatistics;

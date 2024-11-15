import React from "react";

const ProjectsFigues = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <h2 className="text-7xl font-semibold  mb-2 bg-gradient-to-r from-[#0C03AD] to-[#050337] bg-clip-text text-transparent">
            100+
          </h2>
          <p className="text-gray-600">Successful projects</p>
        </div>
        <div>
          <h2 className="text-7xl font-semibold bg-gradient-to-r from-[#0C03AD] to-[#050337] bg-clip-text text-transparent mb-2">
            2-3x
          </h2>
          <p className="text-gray-600">Faster than internal team</p>
        </div>
        <div>
          <h2 className="text-7xl font-semibold bg-gradient-to-r from-[#0C03AD] to-[#050337] bg-clip-text text-transparent mb-2">
            4.8
          </h2>
          <p className="text-gray-600">Reviews on Google</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsFigues;

import Timeline from "@mui/lab/Timeline";

import { dummyWorkoutListData } from "@/datas/dummyWorkoutListData";
import { Workout } from "@/types/workout";
import WorkoutParts from "@/parts/output/WorkoutParts";

const WorkoutList = () => {
  return (
    <Timeline
      sx={{
        bgcolor: "#333333",
        marginLeft: "-80%",
        width: "180%",
        color: "white",
        paddingBottom: "50px",
      }}
    >
      {dummyWorkoutListData.map((item: Workout, index) => {
        return <WorkoutParts key={index} workout={item} />;
      })}
    </Timeline>
  );
};

export default WorkoutList;

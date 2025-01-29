import { Box, Card, Grid, Typography } from "@mui/material";
import { Pie, Bar } from "./../../components/ui/charts";
import { Schedule } from "@mui/icons-material";

const attendanceData = {
  labels: ["Present", "Absent"],
  datasets: [
    {
      data: [80, 20],
      backgroundColor: ["#82ca9d", "#ff6347"],
    },
  ],
};

const completedAssignmentsData = {
  labels: ["Completed", "Pending"],
  datasets: [
    {
      label: "Assignments",
      data: [75, 25],
      backgroundColor: ["#8884d8", "#ffb6c1"],
    },
  ],
};

const resultsData = {
  labels: ["Math", "Science", "History"],
  datasets: [
    {
      label: "Results Overview",
      data: [400, 300, 300],
      backgroundColor: "#82ca9d",
    },
  ],
};

const DashboardStudent = () => {
  return (
    <>
      <div className="flex w-full p-2">
        <div className="flex-1 w-full">
          <h4 className="mt-1 mb-3 text-xl font-semibold md:text-3xl">
            Welcome back, {"Gopikanta Mondal"}!
          </h4>

          <main className=" w-full flex flex-col">
            <div className="flex flex-col lg:flex-row lg:justify-center gap-4 w-full">
              <div className="flex flex-col items-center justify-between w-full lg:w-[400px] gap-3 lg:gap-1 lg:h-[500px]">
                <Grid
                  item
                  xs={12}
                  sx={{
                    width: "100%",
                    height: "100px",
                  }}
                >
                  <Card
                    sx={{
                      padding: "2rem",
                      background: "linear-gradient(145deg, #000000, #434343)", // Black gradient
                      color: "white",
                      borderRadius: "15px", // Medium rounding
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      boxShadow: "0 4px 10px rgba(0,0,0,0.7)",
                      height: "100%",
                    }}
                  >
                    <Schedule
                      sx={{
                        fontSize: 40,
                      }}
                    />
                    <Box>
                      <Typography variant="h6">Next Class</Typography>
                      <Typography variant="body1">Subject: Math</Typography>
                      <Typography variant="body1">Time: 10:00 AM</Typography>
                    </Box>
                  </Card>
                </Grid>

                {/* Attendance Chart */}
                <div className="w-full md:w-1/2 lg:w-full">
                  <div className="p-3 border rounded-lg ">
                    <Typography variant="h6">Attendance</Typography>
                    <Pie data={attendanceData} />
                  </div>
                </div>
              </div>
              <section className="w-full lg:w-1/2 h-[500px] p-2 flex flex-col border rounded-lg">
                <span className="font-bold text-3xl p-2">Notices</span>
                <div className="w-full h-[440px] overflow-y-scroll">
                  <ul className="flex flex-col gap-4  overflow-x-hidden py-2">
                    <li className="min-h-20 border rounded-xl flex flex-col p-2">
                      <span className="font-semibold text-lg">
                        "Math Quiz" due on 12th Feb
                      </span>
                      <span>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Placeat maxime architecto consectetur dolore
                        expedita alias quod ut, reiciendis fuga, repellendus
                        tempore. Cupiditate asperiores ipsum quia nostrum
                        dolorum, nesciunt veniam debitis?
                      </span>
                    </li>
                    <li className="min-h-20 border rounded-xl flex flex-col p-2">
                      <span className="font-semibold text-lg">
                        "Math Quiz" due on 12th Feb
                      </span>
                      <span>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Placeat maxime architecto consectetur dolore
                        expedita alias quod ut, reiciendis fuga, repellendus
                        tempore. Cupiditate asperiores ipsum quia nostrum
                        dolorum, nesciunt veniam debitis?
                      </span>
                    </li>
                    <li className="min-h-20 border rounded-xl flex flex-col p-2">
                      <span className="font-semibold text-lg">
                        "Math Quiz" due on 12th Feb
                      </span>
                      <span>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Placeat maxime architecto consectetur dolore
                        expedita alias quod ut, reiciendis fuga, repellendus
                        tempore. Cupiditate asperiores ipsum quia nostrum
                        dolorum, nesciunt veniam debitis?
                      </span>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
            {/* Completed Assignments Card */}
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                width: "100%",
              }}
            >
              <Card
                sx={{
                  padding: 2,
                  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                  marginTop: 3, // Space between the Next Class and Completed Assignments
                  height: "100%",
                }}
              >
                <Typography variant="h6">Completed Assignments</Typography>
                <Bar height={"100%"} data={completedAssignmentsData} />
              </Card>
            </Grid>

            {/* Results Overview Chart */}
            <Grid
              item
              xs={12}
              sx={{
                marginTop: 10,
              }}
            >
              <div className="p-2 w-full lg:w-[600px] border rounded-lg">
                <Typography variant="h6">Results Overview</Typography>
                <Bar data={resultsData} />
              </div>
            </Grid>
          </main>
        </div>
      </div>
    </>
  );
};

export default DashboardStudent;

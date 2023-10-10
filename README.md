# Johns Hopkins Hospital-Block Utilization Dashboard

In a hospital setting, a 'block' refers to a designated timeframe during which a surgeon is granted the right to use an operating room. Currently, in the orthopedics department at Johns Hopkins Hospital, there is an issue with under-reported block utilization rates. This issue has the potential to negatively affect the department's revenue generation.

As part of our consulting team's efforts to address this problem, we proposed several recommendations. One of these recommendations involved creating a real-time utilization dashboard for surgeons. I represented our team in developing a prototype of this dashboard for demonstration purposes.


## Technical Summary
* The dashboard is implemented with ReactJS and Ant Design
* Surgeons can pick a random date and a specific timeframe, and the dashboard will show the daily and overall utilization rate within this timeframe accordingly.
* Any date with a relatively low (<40%) utilization rate will be marked out as a warning.
* Surgeons can click on one of the bars to see the detailed breakdown of the utilization on that date.

The dashboard is designed to demonstrate which features can help surgeons have a better understanding of their utilization situations. Therefore, no functions have been bonded to the left side menu.

### The simulation data from 2020-2023 has been generated.
### This project has been deployed on [dashboard demo](https://v1.d22kn000tfs6lo.amplifyapp.com/).

import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";


export default function ActivityHeatmap({ repos }) {
    const activity = {};

    repos.forEach((repo) => {
        if (!repo.pushed_at) return;
        const date = repo.pushed_at.split("T")[0];
        activity[date] = (activity[date] || 0) + 1;
    });

    //  const values = [
    //     { date: "2026-07-01", count: 1 },
    //     { date: "2026-07-02", count: 2 },
    //     { date: "2026-07-03", count: 3 },
    // ];

    const values = Object.entries(activity).map(
        ([date, count]) => ({
            date,
            count
        })
    );



    console.log(values);
    return (
        <div className="bg-card border-primary/50 border rounded-lg p-5 h-full w-full">
            <CalendarHeatmap
                startDate={
                    new Date(
                        new Date().setFullYear(
                            new Date().getFullYear() - 1
                        )
                    )
                }
                endDate={new Date()}
                values={values}
                classForValue={(value) => {
                    if (!value) return "color-empty";
                    return `color-scale-${Math.min(value.count, 4)}`;
                }}
            />
        </div>
    );
}
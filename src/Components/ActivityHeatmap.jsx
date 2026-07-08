import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";


export default function ActivityHeatmap({ repos }) {
    const activity = {};

    repos.forEach((repo) => {
        if (!repo.pushed_at) return;
        const date = repo.pushed_at.split("T")[0];
        activity[date] = (activity[date] || 0) + 1;
    });

    const values = Object.entries(activity).map(
        ([date, count]) => ({
            date,
            count
        })
    );

    return (
        <div className="bg-card border-primary/50 border rounded-lg p-5">
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
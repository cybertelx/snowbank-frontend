import { useSelector } from "react-redux";
import { Grid, Zoom } from "@material-ui/core";
import { trim } from "../../helpers";
import "./dashboard.scss";
import { Skeleton } from "@material-ui/lab";
import { IReduxState } from "../../store/slices/state.interface";
import { IAppSlice } from "../../store/slices/app-slice";

import { useTranslation } from "react-i18next";

interface DashboardCardProps {
    title: string;
    value: string;
}
function DashboardCard(props: DashboardCardProps) {
    const isAppLoading = useSelector<IReduxState, boolean>(state => state.app.loading);
    const app = useSelector<IReduxState, IAppSlice>(state => state.app);

    return (
        <Grid item lg={6} md={6} sm={6} xs={12}>
            <div className="dashboard-card">
                <p className="card-title">{props.title}</p>
                <p className="card-value">{isAppLoading ? <Skeleton width="250px" /> : props.value}</p>
            </div>
        </Grid>
    );
}

export default DashboardCard;

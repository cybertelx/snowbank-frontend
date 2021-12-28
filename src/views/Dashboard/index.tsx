import { useSelector } from "react-redux";
import { Grid, Zoom } from "@material-ui/core";
import { trim } from "../../helpers";
import "./dashboard.scss";
import { Skeleton } from "@material-ui/lab";
import { IReduxState } from "../../store/slices/state.interface";
import { IAppSlice } from "../../store/slices/app-slice";

import { useTranslation } from "react-i18next";
import DashboardCard from "./card";

function Dashboard() {
    const { t } = useTranslation();

    const isAppLoading = useSelector<IReduxState, boolean>(state => state.app.loading);
    const app = useSelector<IReduxState, IAppSlice>(state => state.app);

    const trimmedStakingAPY = trim(app.stakingAPY * 100, 1);

    return (
        <div className="dashboard-view">
            <div className="dashboard-infos-wrap">
                <Zoom in={true}>
                    <Grid container spacing={4}>
                        <DashboardCard
                            title={t("RiskFreeValue")}
                            value={new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "USD",
                                maximumFractionDigits: 2,
                                minimumFractionDigits: 2,
                            }).format(app.rfv)}
                        />

                        <DashboardCard title={t("SBPrice")} value={`$${trim(app.marketPrice, 2)}`} />

                        {/*<DashboardCard title={t("RiskFreeValueDelta")} value={`${trim(Number(app.deltaMarketPriceRfv), 2)}%`} /> */}

                        <DashboardCard
                            title={t("MarketCap")}
                            value={new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "USD",
                                maximumFractionDigits: 0,
                                minimumFractionDigits: 0,
                            }).format(app.marketCap)}
                        />

                        {/*<DashboardCard
                            title={t("SupplyStakedTotal")}
                            value={`${new Intl.NumberFormat("en-US", {
                                maximumFractionDigits: 0,
                                minimumFractionDigits: 0,
                            }).format(app.circSupply)}
                                /
                                ${new Intl.NumberFormat("en-US", {
                                    maximumFractionDigits: 0,
                                    minimumFractionDigits: 0,
                                }).format(app.totalSupply)}`}
                            />*/}

                        <DashboardCard
                            title={t("TVL")}
                            value={new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "USD",
                                maximumFractionDigits: 0,
                                minimumFractionDigits: 0,
                            }).format(app.stakingTVL)}
                        />

                        <DashboardCard title={t("APY")} value={`${new Intl.NumberFormat("en-US").format(Number(trimmedStakingAPY))}%`} />

                        <DashboardCard title={t("CurrentIndex")} value={`${trim(Number(app.currentIndex), 2)} SB`} />

                        <DashboardCard
                            title={t("TreasuryBalance")}
                            value={new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "USD",
                                maximumFractionDigits: 0,
                                minimumFractionDigits: 0,
                            }).format(app.treasuryBalance)}
                        />

                        {/* <DashboardCard
                            title={t("BackingPerSB")}
                            value={new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "USD",
                                maximumFractionDigits: 0,
                                minimumFractionDigits: 0,
                            }).format(app.rfv)}
                        /> */}

                        <DashboardCard title={t("Runway")} value={`${trim(Number(app.runway), 1)} Days`} />
                    </Grid>
                </Zoom>
            </div>
        </div>
    );
}

export default Dashboard;

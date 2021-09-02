import React from "react";
import s from "./ProductTabs.module.css";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Testimonials from "../../../components/Testimonials/Testimonials";
import { useSelector } from "react-redux";
import SlickSlider from "../../../components/SlickSlider/SlickSlider";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
function ProductTabs() {
  const testimonialsAPI = useSelector((state) => state.mainPage.testimonials);
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={s.wrapper}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
          style={{ width: "500px", margin: "auto" }}
        >
          <Tab label="Описание" {...a11yProps(0)} />
          <Tab label="Отзывы" {...a11yProps(1)} />
          <Tab label="Совет от профессионала" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
        <div className={s.compositionWrap}>
          <h5>Состав букета</h5>
          <div className={s.composition}>
            <ul>
              <li>Эвкалипт Цинерия</li>
              <li>Лента атлас</li>
              <li>Писташ</li>
            </ul>
            <div className={s.counts}>
              <p>&#8212; 1 шт</p>
              <p>&#8212; 1 шт</p>
              <p>&#8212; 1 шт</p>
            </div>
          </div>
          <p>Высота букета, см.: 45 см</p>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <SlickSlider slides={4}>
          {testimonialsAPI.map((item, idx) => {
            return <Testimonials item={item} key={idx} />;
          })}
        </SlickSlider>
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        Item Three
      </TabPanel>
    </div>
  );
}

export default ProductTabs;

import makeStyles from "@material-ui/core/styles/makeStyles";
import { createStyles } from "@material-ui/core";
import React, { forwardRef } from "react";

const useStyles = makeStyles(() => createStyles({
    section: {
        width: '100%',
        height: '100%'
    }
}));


const Section = forwardRef(({ children }, ref) => {
    const styles = useStyles();

    return (
        <div ref={ref} className={styles.section}>
            {children}
        </div>
    );
});

export default Section;
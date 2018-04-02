import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Card, {CardActions, CardContent} from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import {ListItem} from "material-ui";
import QueryResultTable from "../../components/QueryResultTable";
import RecordTable from "./RecordTable";

const styles = theme => ({
    searchBar: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginBottom: theme.spacing.unit * 3,
        width: 'calc(90%)',
    },
    card: {
        minWidth: 'calc(80%)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
        color: theme.palette.text.secondary,
    },
    pos: {
        marginBottom: 12,
        color: theme.palette.text.secondary,
    },
    action: {
        display: 'flex',
    },
});

class Records extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        const {classes, theme} = this.props;
        if (!this.props.data) {
            return <div>{''}</div>
        }
        return (
            <ListItem>
                <Card className={classes.card} elevation={4}>
                    <CardContent>
                        <Typography
                            className={classes.title}>Q: {this.props.query}</Typography>
                        <Typography variant="headline" component="h2">
                            {'Populating randomly generated data...'}
                        </Typography>
                        <Typography className={classes.pos}>
                            {this.props.headline}
                        </Typography>
                        <RecordTable data={this.props.data}/>
                    </CardContent>
                    <CardActions>
                        <Button size="small" className={classes.action}>Download
                            CSV</Button>
                    </CardActions>
                </Card>
            </ListItem>
        );
    }
}

Records.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withStyles(styles, {withTheme: true})(Records);
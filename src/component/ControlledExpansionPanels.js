import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

function ControlledExpansionPanels({ sections }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      {Object.keys(sections).length &&
        Object.keys(sections).map((section) => (
          <ExpansionPanel
            key={section}
            expanded={expanded === section}
            onChange={handleChange(section)}
          >
            {/* Title */}
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>
                {sections[section].nombre}
              </Typography>
            </ExpansionPanelSummary>

            {/* Description */}
            <ExpansionPanelDetails>
              <div>
                {sections[section].variables.length &&
                  sections[section].variables.map((variable) => (
                    <div key={variable.nombre}>
                      {variable.seccion == sections[section].valor && (
                        <div>{variable.nombre}</div>
                      )}
                    </div>
                  ))}
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
    </div>
  );
}

export default ControlledExpansionPanels;

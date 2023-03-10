import * as React from 'react';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { AppContext } from "../App";

import DrawerContent from './DrawerContent';


const drawerBleeding = -2;

const Root = styled('div')(({ theme }) => ({
    height: '100%',
    backgroundColor:
        theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
}));

function SwipeableEdgeDrawer(props) {
    const { isVisibleDrawer, setIsVisibleDrawer } = React.useContext(AppContext)
    const { window } = props;

    const toggleDrawer = (newOpen) => () => {
        setIsVisibleDrawer(newOpen);
    };

    // This is used only for the example
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Root id='mobile-drawer'>
            <CssBaseline />
            <Global
                styles={{
                    '.MuiDrawer-root > .MuiPaper-root': {
                        height: `225px`,
                        overflow: 'visible',
                    },
                }}
            />
            <Box className="absolute left-0 bottom-[2px] w-[100%] flex  sm:hidden justify-center">
                <Button onClick={toggleDrawer(true)}>
                    <ExpandLessIcon sx={{ backgroundColor: "rgba(229,231,235,0.7)", height: "40px", width: "40px", borderRadius: "50%" }} />
                </Button>
            </Box>
            <SwipeableDrawer
                className='sm:hidden'
                container={container}
                anchor="bottom"
                open={isVisibleDrawer}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                swipeAreaWidth={drawerBleeding}
                disableSwipeToOpen={false}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <StyledBox
                    sx={{
                        position: 'absolute',
                        top: -drawerBleeding,
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        visibility: 'visible',
                        right: 0,
                        left: 0,
                    }}
                >
                    <Puller />
                    {/* <Typography sx={{ p: 2, color: 'text.secondary' }}>51 results</Typography> */}
                </StyledBox>
                <StyledBox
                    sx={{
                        height: '100%',
                        overflow: 'auto',
                    }}
                >
                    {/* <Skeleton variant="rectangular" height="100%" /> */}
                    <DrawerContent />
                </StyledBox>
            </SwipeableDrawer>
        </Root >
    );
}


export default SwipeableEdgeDrawer;
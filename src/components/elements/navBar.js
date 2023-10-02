import React from 'react';
import { AppBar, Box, Toolbar, IconButton } from '@mui/material/';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <div>
            <Box sx={{ flexGrow: 1, overFlow: "auto" }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            component={Link} to={'/'}
                            size="large"
                            edge="end"
                            aria-label="settings "
                            aria-haspopup="true"
                            color="inherit"
                        >
                            Plano
                        </IconButton>
                        <IconButton
                            component={Link} to={'/sectores'}
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            Sectores
                        </IconButton>
                        <IconButton
                            component={Link} to={'/ayuda'}
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            Ayuda
                        </IconButton>

                    </Toolbar>
                </AppBar>
            </Box>


        </div>
    );
}

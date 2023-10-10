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
                            component={Link} to={'/users'}
                            size="large"
                            edge="end"
                            aria-label="settings "
                            aria-haspopup="true"
                            color="inherit"
                        >
                            Usuarios
                        </IconButton>
                        <IconButton
                            component={Link} to={'/alerts'}
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            Alertas
                        </IconButton>
                        <IconButton
                            component={Link} to={'/wells'}
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            Pozos
                        </IconButton>

                    </Toolbar>
                </AppBar>
            </Box>


        </div>
    );
}

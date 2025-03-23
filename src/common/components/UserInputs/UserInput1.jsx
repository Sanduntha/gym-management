import React from 'react';
import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';

const UserInput1 = ({ name,val}) => {
    return (
        <Card sx={{ maxWidth: 550, borderRadius: 3, boxShadow: 3, backgroundColor: '#f5f5f5',
            height:60
         }}>
            <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        {val}:
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold',marginLeft:1 }}>
                        {name}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default UserInput1;

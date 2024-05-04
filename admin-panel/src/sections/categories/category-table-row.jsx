import { useState } from 'react';
import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
// ----------------------------------------------------------------------

export default function CategoryTableRow({
  selected,
  name,
  description,
  status,
  createdat,
  updatedat,
  handleClick,
}) {
  const [open, setOpen] = useState(null);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  return (
    <>
      <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
        <TableCell padding="checkbox">
          <Checkbox disableRipple checked={selected} onChange={handleClick} />
        </TableCell>

        <TableCell component="th" scope="row" padding="none">
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography variant="subtitle2" noWrap>
              {name}
            </Typography>
          </Stack>
        </TableCell>

        <TableCell>{description}</TableCell>

        <TableCell>{createdat}</TableCell>
        <TableCell>{updatedat}</TableCell>

        <TableCell>
          <Label color={(status === 'false' && 'error') || 'success'}>{status.toString()}</Label>
        </TableCell>

        <TableCell align="right">
          <IconButton onClick={handleOpenMenu}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow>

      <Popover
  open={!!open}
  anchorEl={open}
  onClose={handleCloseMenu}
  anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
  PaperProps={{
    sx: { width: 140 },
  }}
>
  <MenuItem onClick={handleCloseMenu}>
    <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
    Edit
  </MenuItem>
  <MenuItem onClick={handleCloseMenu} sx={{ color: 'error.main' }}>
    <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
    Delete
  </MenuItem>
  <MenuItem >
    <Iconify icon="eva:eye-outline" sx={{ mr: 2 }} />
    View
  </MenuItem>
  <MenuItem >
    <Iconify icon="eva:swap-outline" sx={{ mr: 2 }} />
    Change Status
  </MenuItem>
</Popover>

    </>
  );
}

CategoryTableRow.propTypes = {
  handleClick: PropTypes.func,
  name: PropTypes.any,
  description: PropTypes.any,
  status: PropTypes.any,
  createdat: PropTypes.any,
  updatedat: PropTypes.any,
  selected: PropTypes.any,
};

import React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Autocomplete, {createFilterOptions} from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
import baseCarbone from './../../__mocks__/base_carbone.json'



const filter = createFilterOptions();

const InputAutocomplete = () => {
    console.log('notre base Carbone !')
    console.log(baseCarbone)

    console.log('nos films')
    console.log(baseCarbone)
    let navigate = useNavigate();
    const [value, setValue] = React.useState(null);
    const [open, toggleOpen] = React.useState(false);

    const handleClose = () => {
        setDialogValue({
            modele: '',
            year: '',
        });

        toggleOpen(false);
    };

    const [dialogValue, setDialogValue] = React.useState({
        modele: '',
        year: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        setValue({
            modele: dialogValue.modele,
            year: parseInt(dialogValue.year, 10),
        });

        handleClose();
    };

    const SearchValue = () => {
        localStorage.setItem('searchValue', JSON.stringify(value));

        navigate("/recherche");
    }

    return (
        <React.Fragment>
            <Autocomplete
                style={{margin: "auto"}}
                value={value}
                onChange={(event, newValue) => {
                    if (typeof newValue === 'string') {
                        // timeout to avoid instant validation of the dialog's form.
                        setTimeout(() => {
                            toggleOpen(true);
                            setDialogValue({
                                modele: newValue,
                                year: '',
                            });
                        });
                    } else if (newValue && newValue.inputValue) {
                        toggleOpen(true);
                        setDialogValue({
                            modele: newValue.inputValue,
                            year: '',
                        });
                    } else {
                        setValue(newValue);
                    }
                }}
                filterOptions={(options, params) => {
                    const filtered = filter(options, params);

                    if (params.inputValue !== '') {
                        filtered.push({
                            inputValue: params.inputValue,
                            modele: `Add "${params.inputValue}"`,
                        });
                    }

                    return filtered;
                }}
                id="free-solo-dialog-demo"
                options={baseCarbone}
                getOptionLabel={(option) => {
                    // e.g value selected with enter, right from the input
                    if (typeof option === 'string') {
                        return option;
                    }
                    if (option.inputValue) {
                        return option.inputValue;
                    }
                    return option.modele;
                }}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                renderOption={(props, option) => <li {...props}>{option.modele}</li>}
                sx={{width: 300}}
                freeSolo
                renderInput={(params) => <TextField {...params} label="Free solo dialog"/>}
            />
            <SearchIcon onClick={SearchValue}/>

            <Dialog open={open} onClose={handleClose}>
                <form onSubmit={handleSubmit}>
                    <DialogTitle>Add a new film</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Did you miss any film in our list? Please, add it!
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            value={dialogValue.modele}
                            onChange={(event) =>
                                setDialogValue({
                                    ...dialogValue,
                                    modele: event.target.value,
                                })
                            }
                            label="modele"
                            type="text"
                            variant="standard"
                        />
                        <TextField
                            margin="dense"
                            id="name"
                            value={dialogValue.year}
                            onChange={(event) =>
                                setDialogValue({
                                    ...dialogValue,
                                    year: event.target.value,
                                })
                            }
                            label="year"
                            type="number"
                            variant="standard"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type="submit">Add</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </React.Fragment>
    );
}

export default InputAutocomplete;

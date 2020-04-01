import React, {useState} from 'react';
import './App.css';
import opened_folder from './assets/img/opened_folder.png';
import closed_folder from './assets/img/closed_folder.png';
import file from './assets/img/file.png';
import data from './json/data'

const App = () => {


    const [isRootOpen, setIsRootOpen] = useState(false);
    const [isFirstFolderOpen, setIsFirstFolderOpen] = useState(false);
    const [isSecondFolderOpen, setIsSecondFolderOpen] = useState(false);
    const [isUnderSecondFolderOpen, setIsUnderSecondFolderOpen] = useState(false);

    const openRootFolder = () => {
        isRootOpen === false ?
            setIsRootOpen(true) : setIsRootOpen(false);
        setIsFirstFolderOpen(false);
        setIsSecondFolderOpen(false);
        setIsUnderSecondFolderOpen(false)
    };
    const openFirstFolder = () => {
        isFirstFolderOpen === false ?
            setIsFirstFolderOpen(true) : setIsFirstFolderOpen(false)
    };
    const openSecondFolder = () => {
        isSecondFolderOpen === false ?
            setIsSecondFolderOpen(true) : setIsSecondFolderOpen(false)
    };
    const openUnderSecondFolder = () => {
        isUnderSecondFolderOpen === false ?
            setIsUnderSecondFolderOpen(true) : setIsUnderSecondFolderOpen(false)
    };

    const classForLi = (folderName) => {
        if ((folderName === isRootOpen && isRootOpen === true) ||
            (folderName === isFirstFolderOpen && isFirstFolderOpen === true) ||
            (folderName === isSecondFolderOpen && isSecondFolderOpen === true)||
            (folderName === isUnderSecondFolderOpen && isUnderSecondFolderOpen === true)
        ) {
            return 'openedRoot'
        } else return 'closedRoot'
    };

    const imageIcon = (folderName) => {
        if ((folderName === isRootOpen && isRootOpen === true) ||
            (folderName === isFirstFolderOpen && isFirstFolderOpen === true) ||
            (folderName === isSecondFolderOpen && isSecondFolderOpen === true) ||
            (folderName === isUnderSecondFolderOpen && isUnderSecondFolderOpen === true)
        ) {
            return opened_folder
        } else return closed_folder
    };


    return (
        <div className="App">
            <div className="titleTree"> Simple tree</div>
            <ul className="tree">
                <li className={classForLi(isRootOpen)} onClick={openRootFolder}><img src={imageIcon(isRootOpen)}
                                                                                     alt=""/> {data[0].name} </li>
                {isRootOpen ?
                    <ul>
                        <li className={classForLi(isFirstFolderOpen)} onClick={openFirstFolder}><img
                            src={imageIcon(isFirstFolderOpen)} alt=""/> {data[1].name} </li>
                        {isFirstFolderOpen ?
                            <ul>
                                <li><img src={file} alt=""/> {data[2].name}</li>
                            </ul>
                            :
                            <> </>
                        }
                        <li className={classForLi(isSecondFolderOpen)} onClick={openSecondFolder}><img
                            src={imageIcon(isSecondFolderOpen)} alt=""/> {data[3].name} </li>
                        {isSecondFolderOpen ?
                            <ul>
                                <li className={classForLi(isUnderSecondFolderOpen)} onClick={openUnderSecondFolder}><img
                                    src={imageIcon(isUnderSecondFolderOpen)} alt=""/> {data[4].name}</li>
                                {isUnderSecondFolderOpen ?
                                    <ul>
                                        <li><img src={file} alt=""/>{data[5].name}</li>
                                        <li><img src={file} alt=""/>{data[6].name}</li>
                                    </ul>
                                    :
                                    <> </>
                                }
                            </ul>
                            :
                            <> </>
                        }
                    </ul>
                    :
                    <>  </>
                }

            </ul>
        </div>
    );
};

export default App;

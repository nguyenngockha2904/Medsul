import styled from 'styled-components';
export const StyledModel = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    display:block;
    width: 100%;
    height: 100%;
    background: #28a74529;
    overflow: hidden;
    overflow-y: scroll;
    outline: 0;
    transition: 0.5s all;
    ::-webkit-scrollbar{
        width: 0px; 
    }
    .modalService-dialog{
    margin: 5% auto;
    max-width:600px;
    &.modal-lg{
        max-width: 1000px;
    }
    .modalService-content{
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        pointer-events: auto;
        background-color: #fff;
        background-clip: padding-box;
        border-radius: 0.3rem;
        border:none;
        outline: 0;
        .modalService-header{
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            padding: 1rem 1rem;
            border-top-left-radius: calc(0.3rem - 1px);
            border-top-right-radius: calc(0.3rem - 1px);
            .modals-title{
                    color:#646D82;
                    text-transform:uppercase;
                    letter-spacing: 1px;
                    font-weight: 500;
                    font-size: 1.6em;
            }
            .modal-title{
                width: 100%;
                text-align: center;
            }
            .close{
                outline: none;
            }
            
            border:none;
        }
        .btnNapTien{
            border: none;
            padding: 0.3rem 0.6rem;
            border-radius: 20px;
            margin:0;
            font-size: 0.8em;
            font-weight: 700;
            letter-spacing: 1px;
            white-space: nowrap;
            outline:none;
            color: #2CD889 ;
            background:#fff;
            box-shadow: 1px 2px 4px -0.5px #80808080;
            
            &:hover{
                color:#fff;
                background: #2CD889;
            }
        }
        .TongTien_Title{
            text-align: center;
            font-size: 0.8em;
            margin:1rem;
            color:#000;
            font-weight: 700;
            letter-spacing: 1px;
            .subtitle{
                align-self: center;
            }
            .price{
                padding: 0;
                color: #2CD889 ;
                margin-bottom: 1.5rem ;
                font-size: 2rem;
                .vnd{
                    margin: 0 0.5rem;
                    font-weight: 200;
                    color: #000 ;
                    letter-spacing: 3px;
                    font-size: 1rem;
                    vertical-align: middle;
                }
            }
        }
        .TongTien_history{
            
            padding: 0 1rem;
            border-top: 1px solid #0000003b !important;
            padding-bottom: 1rem;
            min-height: 300px;
            .history_title{
                font-weight: 500;
                letter-spacing: 2px;
                font-size: 1rem;
                margin: 1rem 0;
            }
            .history_item{
                padding:1rem;
                margin:0.3rem 0;
                border-bottom: 1px solid #0000003b;
                letter-spacing: 2px;
                .title_historyItem{
                    font-size: 0.7rem;
                }
                .date_historyItem{
                    font-size: 0.6rem;
                    font-weight: 700;
                }
                .price_historyItem{
                    font-size: 0.7rem;
                    text-align:right;
                }
                .status_historyItem{
                    text-align:right;
                    font-weight: 500;
                    color: #2CD889 ;
                    font-size: 0.6rem;
                }
            }
        }
        .modalService-body{
            .avatarImg{
                align-self: center;
                height: 80%;
                width: 80%;
                .img-fluid{    
                    border-radius: 100%;
                    box-shadow: 1px 2px 4px -0.5px #80808080;
                    
                }
                &.cmnd{
                    width: 100%;
                    height: 100%;
                    text-align:center;
                    .img-fluid{
                        box-shadow: 1px 2px 4px -0.5px #80808080;
                        border-radius:10px;
                        width: 60%;
                        margin:10px 0;
                    }
                }
            }
            position: relative;
            flex: 1 1 auto;
            padding: 1rem;
            border:none;
            .titleGroup{
                font-size: 1.2em;
                margin:0;
                color:#000;
                font-weight: 700;
                letter-spacing: 1px;
                padding: 1rem 0;
                &.bb{
                    border-bottom:1px solid #0000003b !important;
                }
            }
            .form-group{
                label{
                    margin:0;
                    color:#000;
                    font-weight: 700;
                    letter-spacing: 1px;
                    font-size: 0.8em;
                }
                .radGen{
                    margin:0 10px;
                }
                .btnChooseImage{
                    font-size: 0.8em;
                    margin:0;
                    font-weight: 700;
                    letter-spacing: 1px;
                    white-space: nowrap;
                    padding: 0 0.5rem;
                    border-radius: 10px;
                    border: none;
                    outline:none;
                    color: #2CD889 ;
                    background:#fff;
                    box-shadow: 1px 2px 4px -0.5px #80808080;
                    &:hover{
                        color:#fff;
                        background: #2CD889;
                    }
                }
                .form-contro{
                    display: block;
                    text-align:center;
                    width: 100%;
                    height: calc(1.5em + 0.75rem + 2px);
                    padding: 0 0.75rem;
                    font-size: 1rem;
                    font-weight: 400;
                    line-height: 1.5;
                    color: #495057;
                    background-color: #fff;
                    border-radius: 0.25rem;
                    border:none;
                    border-bottom:1px solid #CBD1D9;
                    outline: none;
                    &.mul_text{
                        border: 1px solid #CBD1D9;
                        text-align:left;
                    }
                    &.gioitinh{
                        border:none;
                    }
                    
                }
                
                &.ac{
                    label{
                        color: #49505794;
                    }
                    .form-contro{
                    color: #49505794;
                    }
                }
                
                &.secondFormleft, &.secondFormright{
                    width: 100%;
                }
                &.secondFormleft{
                    margin-right:1em;
                }
                &.secondFormright{
                    margin-left:1em;
                }
                &.width3{
                    width:30.6%;
                }
            }  
        }
        
        .btnAccept{
            border-radius:10px;
            color: #fff ;
            background-color:#2CD889;
            border:none;
            font-size: 0.8em;
            font-weight: 700;
            letter-spacing: 1px;
            white-space: nowrap;
            transition: 0.2s all;
            &:hover {
                color: #2CD889 ;
            background:#fff;
            box-shadow: 1px 2px 4px -0.5px #80808080;
            }
        }
        .modalService-footer{
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: flex-end;
            padding: 0.75rem;
            border-top: 1px solid #dee2e6;
            border-bottom-right-radius: calc(0.3rem - 1px);
            border-bottom-left-radius: calc(0.3rem - 1px);
            border:none;
            
        }
    }
    }
`;

export const StyleTable = styled.div`
.table{
    box-shadow: 1px 2px 4px -0.5px #80808080;
    min-height: 300px;
    height: auto;
    border-radius: 10px;
    thead{
        tr{
            th{
                border: none;
                white-space: nowrap;
                text-align: center;
                color: #CBD1D9;
            }
        }
    }
    tbody{
        .tRow{
            
            th{
                text-align: center; 
            }
            td{
                font-size: 0.8rem;
                white-space: nowrap;                
                text-align: center;
                color: rgb(0 0 0);
                padding: 1em;
                letter-spacing: 0.3px;
                font-weight: 400;
                vertical-align: initial;
                &.wrap{
                    white-space: normal !important;
                    text-align:left;
                }
                &.tdStatus{
                    color:#FF4600;
                    font-weight: 700;
                    letter-spacing: 1px;
                    font-size: 0.8em;
                }
                &.isThuViec{
                    color:#FFEF00;
                }
                &.isNghiViec{
                    color:#FF0000;
                }
                &.isChinhThuc{
                    color:#2CD889;
                }
                
                &.groupBtn{
                    .btnCustom{
                        padding: 0 10px;
                        margin: 0 0.3rem;
                        border-radius: 10px;
                        background: #fff;
                        border: none;
                        outline:none;
                        &:hover{
                            background: #F0FAF8;
                        }
                    }
                }
            }
            &:hover{
                cursor: pointer;
                background-color:#F0FAF0;
                td{
                    &.groupBtn{
                        .btnCustom{
                            background: #F0FAF0;
                            &:hover{
                                background: #fff;    
                            }
                        }
                    }
                }
            }
        }
        
    }
}
`

export const StyleGroupButtonSearch = styled.div`
    margin: 1rem 0;
    display: flex;
    justify-content: space-between;
    .selectStatus{
        border: none;
        padding: 0.3rem;
        border-radius: 5px;
        outline: none;
        letter-spacing: 0.8px;
        font-size: 0.8rem;
        font-weight: 500;
        color:#fff;
        background: #2CD889;
        &:hover {
            box-shadow: 1px 2px 4px -0.5px #80808080;
            color: #2CD889 ;
            background:#fff;
        }
        &.isThuViec{
            color: #fff ;
                background:#FFEF00;
            &:hover{
                box-shadow: 1px 2px 4px -0.5px #80808080;
                color:#FFEF00;
                background:#fff;
            }
        }
        &.isNghiViec{
            color: #fff ;
            background:#FF0000;
            &:hover{
                box-shadow: 1px 2px 4px -0.5px #80808080;    
                color:#FF0000;
                background:#fff;
            }
        }
        &.isChinhThuc{
            box-shadow: 1px 2px 4px -0.5px #80808080;
            color:#2CD889;
            background:#fff;
            &:hover{
                color: #fff ;
                background:#2CD889;    
            }
        }
        
    }
    .groupSearch{
        box-shadow: 1px 2px 4px -0.5px #80808080;
        letter-spacing: 0.8px;
        font-size: 0.8rem;
        border-radius:10px;
        .form-contro , .btnSearch{
            outline: none;
            border: none;
            font-weight: 500;
        }
        .form-contro{
            border-radius: 10px;
            padding: 0 1rem;
        }
        .btnSearch{
            color:#fff;
            background: #2CD889;
            padding: 0 1rem;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            border-radius:10px;
            transition: all 0.2s;
            &:hover{
                background: #fff;
                color: #2CD889;
            }
        }
    }
    .titleGroup{
        letter-spacing: 0.8px;
        font-size: 0.8rem;
        font-weight: 700;
        margin:0;
        padding:0.3rem;
    }
    .btnAdd{
        border-radius: 10px;
        border: none;
        padding: 0 1rem;
        letter-spacing: 0.8px;
        font-size: 0.8rem;
        font-weight: 500;
        color:#fff;
        background: #2CD889;
        outline: none;
        transition: all 0.2s;
        &:hover {
            box-shadow: 1px 2px 4px -0.5px #80808080;
            color: #2CD889 ;
            background:#fff;
        }
       
    }
`

export const StylePageComponent = styled.div`
    background: #F0FAF8;
    min-height: 1000px;
    height: auto;
    padding: 1.5rem 1rem;
    .title{
        color: #2CD889;
        text-transform: uppercase;
        font-size: 1rem;
        font-weight: 500;
        letter-spacing: 1px;
        margin: 0.5rem 0;
    }
    .btn-group-tab{
        .btnTab{
            padding: 0.3rem 0.8rem;
            border: 0;
            font-size: 1rem;
            font-weight: 500;
            letter-spacing: 1.5px;
            background: #fff;
            outline:none;
            position: relative;
            transition: all 0.5s;
            &.tabDD{
                border-top-left-radius: 10px;
            }
            &.tabDT{
                border-top-right-radius: 10px;
            }
            &::after{
                content: '';
                position: absolute;
                height: 3px;
                background: #2CD889;
                width: 0;
                bottom: 0;
                left: 0;
                right: 0;
                transition: all 0.5s;
            }
            &:hover{
                &::after{
                    width:100%;
                }
            }
            &:focus{
                &::after{
                    width:100%;
                }
            }
            
            &.ac{
                color:#2CD889;
                &::after{
                    width:100%;
                }
            }
        }
    }
    .contentTabGroup{
        background: #fff;
        padding: 1rem 0.8rem;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
        transition: all 1s;
        .contentTab{
            .title_tab{
                letter-spacing: 0.8px;
                font-size: 0.8rem;
                font-weight: 500;
                text-transform: uppercase;
            }
            &.tab_DD{
            }
            &.tab_DT{
                
            }
        }
    }

`







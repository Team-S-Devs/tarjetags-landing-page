import React from 'react'
import '../../styles/Prices/TableCompare.css';
import BoxBenefit from './BoxBenefit';
import BoxTitle from './BoxTitle';

function TableComparePlans() {


  return (
    <div className='TableCompare-container'>
        <h2 className='tittle-text-table'>ELIGE EL PLAN QUE MAS SE ADAPTE A TUS NECESIDADES</h2>
        <div className='table-container'>
            <div className='row-container'>
                <div className='box-content-top box-benefit'>
                    <h3 className='tittle-benefits'>Beneficios</h3>
                </div>

                <BoxTitle title='Basico' currency='Bs' amount='100'/>
                <BoxTitle title='Premium' currency='Bs' amount='200'/>
                <BoxTitle title='Premium' currency='Bs' amount='300'/>
                <BoxTitle title='Premium' currency='Bs' amount='400'/>
                <BoxTitle title='Basico' currency='Bs' amount='100'/>
                <BoxTitle title='Premium' currency='Bs' amount='200'/>
                <BoxTitle title='Premium' currency='Bs' amount='300'/>
                <BoxTitle title='Premium' currency='Bs' amount='400'/>

            </div>

            <div className='row-container'>
                <div className='box-content text-benefit'>
                    <div className='divisor-line'></div>
                    <h3>Renovacion</h3>
                </div>
                <BoxBenefit  iconType='true'/>
                <BoxBenefit  iconType='true'/>
                <BoxBenefit  iconType='true'/>
                <BoxBenefit  iconType='true'/>
                <BoxBenefit  iconType='true'/>
                <BoxBenefit  iconType='true'/>
                <BoxBenefit  iconType='true'/>
                <BoxBenefit  iconType='true'/>
            </div>

            <div className='row-container'>
                <div className='box-content text-benefit'>
                    <div className='divisor-line'></div>
                    <h3>Beneficio</h3>
                </div>
                <BoxBenefit text='Beneficio'/>
                <BoxBenefit text='Beneficio'/>
                <BoxBenefit text='Beneficio'/>
                <BoxBenefit text='Beneficio'/>
                <BoxBenefit text='Beneficio'/>
                <BoxBenefit text='Beneficio'/>
                <BoxBenefit text='Beneficio'/>
                <BoxBenefit text='Beneficio'/>
            </div>

            <div className='row-container'>
                <div className='box-content text-benefit'>
                    <div className='divisor-line'></div>
                    <h3>Beneficio</h3>
                </div>
                <BoxBenefit text='Beneficio'/>
                <BoxBenefit text='Beneficio'/>
                <BoxBenefit text='Beneficio'/>
                <BoxBenefit text='Beneficio'/>
                <BoxBenefit text='Beneficio'/>
                <BoxBenefit text='Beneficio'/>
                <BoxBenefit text='Beneficio'/>
                <BoxBenefit text='Beneficio'/>
            </div>

            <div className='row-container'>
                <div className='box-content text-benefit'>
                    <div className='divisor-line'></div>
                    <h3>Beneficio</h3>
                </div>
                <BoxBenefit text='Beneficio'/>
                <BoxBenefit text='Beneficio'/>
                <BoxBenefit text='Beneficio'/>
                <BoxBenefit text='Beneficio'/>
                <BoxBenefit text='Beneficio'/>
                <BoxBenefit text='Beneficio'/>
                <BoxBenefit text='Beneficio'/>
                <BoxBenefit text='Beneficio'/>
            </div>

            <div className='row-container'>
                <div className='box-content text-benefit'>
                    <div className='divisor-line'></div>
                    <h3>Beneficio</h3>
                </div>
                <BoxBenefit iconType='false'/>
                <BoxBenefit iconType='false'/>
                <BoxBenefit iconType='false'/>
                <BoxBenefit iconType='false'/>
                <BoxBenefit iconType='false'/>
                <BoxBenefit iconType='false'/>
                <BoxBenefit iconType='false'/>
                <BoxBenefit iconType='false'/>

            </div>

            <div className='row-container'>
                <div className='box-content text-benefit'>
                    <div className='divisor-line'></div>
                    <h3>Beneficio</h3>
                </div>
                <BoxBenefit iconType='false'/>
                <BoxBenefit iconType='false'/>
                <BoxBenefit iconType='false'/>
                <BoxBenefit iconType='false'/>
                <BoxBenefit iconType='false'/>
                <BoxBenefit iconType='false'/>
                <BoxBenefit iconType='false'/>
                <BoxBenefit iconType='false'/>

            </div>

            <div className='row-container'>
                <div className='box-content text-benefit'>
                    <div className='divisor-line'></div>
                    <h3>Beneficio</h3>
                </div>
                <BoxBenefit iconType='false'/>
                <BoxBenefit iconType='false'/>
                <BoxBenefit iconType='false'/>
                <BoxBenefit iconType='false'/>
                <BoxBenefit iconType='false'/>
                <BoxBenefit iconType='false'/>
                <BoxBenefit iconType='false'/>
                <BoxBenefit iconType='false'/>

            </div>

            <div className='row-container'>
                <div className='box-content text-benefit'>
                    <div className='divisor-line'></div>
                    <h3>Beneficio</h3>
                </div>
                <BoxBenefit iconType='false'/>
                <BoxBenefit iconType='false'/>
                <BoxBenefit iconType='false'/>
                <BoxBenefit iconType='false'/>
                <BoxBenefit iconType='false'/>
                <BoxBenefit iconType='false'/>
                <BoxBenefit iconType='false'/>
                <BoxBenefit iconType='false'/>

            </div>
        </div>
    </div>
  )
}

export default TableComparePlans;
import React from 'react'
import './Task_chart.css'

function Task_chart() {
    return (
        
            <div className='col-md-6 mt-2'>
                <div className='mt-10'>
                    <div className='card cards-body-border'>
                        <div>
                            <div className='Task-chart-space-between'>
                                <div className='Task-chart-topic'>Task</div>
                                <div className='Task-chart-point'>
                                    <span className='Task-point-1'>
                                        Submitted Task :
                                        <span className='Task-point-inner'>20</span>
                                    </span>
                                    <span className='Task-point-1'>
                                        Pending Task :
                                        <span className='Task-point-inner'>0</span>
                                    </span>
                                </div>
                            </div>
                            <svg width="600" height="300">
                                <g transform="translate(30,20)">
                                    <g class="axis x" transform="translate(30, 235)" fill="none" font-size="10" font-family="sans-serif" text-anchor="middle">
                                        <path class="domain" stroke="currentColor" d="M0,6V0H540V6">
                                        </path>
                                        <g class="tick" opacity="1" transform="translate(0,0)"><line stroke="currentColor" y2="6">
                                        </line>
                                            <text fill="currentColor" y="9" dy="0.71em">
                                                0
                                            </text>
                                        </g>
                                        <g class="tick" opacity="1" transform="translate(54,0)">
                                            <line stroke="currentColor" y2="6">
                                            </line>
                                            <text fill="currentColor" y="9" dy="0.71em">
                                                2
                                            </text>
                                        </g>
                                        <g class="tick" opacity="1" transform="translate(108,0)">
                                            <line stroke="currentColor" y2="6">
                                            </line>
                                            <text fill="currentColor" y="9" dy="0.71em">
                                                4
                                            </text>
                                        </g>
                                        <g class="tick" opacity="1" transform="translate(162,0)">
                                            <line stroke="currentColor" y2="6">
                                            </line>
                                            <text fill="currentColor" y="9" dy="0.71em">
                                                6
                                            </text>
                                        </g>
                                        <g class="tick" opacity="1" transform="translate(216,0)">
                                            <line stroke="currentColor" y2="6">
                                            </line>
                                            <text fill="currentColor" y="9" dy="0.71em">
                                                8
                                            </text>
                                        </g>
                                        <g class="tick" opacity="1" transform="translate(270,0)">
                                            <line stroke="currentColor" y2="6">
                                            </line>
                                            <text fill="currentColor" y="9" dy="0.71em">
                                                10
                                            </text>
                                        </g>
                                        <g class="tick" opacity="1" transform="translate(324,0)">
                                            <line stroke="currentColor" y2="6">
                                            </line>
                                            <text fill="currentColor" y="9" dy="0.71em">
                                                12
                                            </text>
                                        </g>
                                        <g class="tick" opacity="1" transform="translate(378,0)">
                                            <line stroke="currentColor" y2="6">
                                            </line>
                                            <text fill="currentColor" y="9" dy="0.71em">
                                                14
                                            </text>
                                        </g>
                                        <g class="tick" opacity="1" transform="translate(432,0)">
                                            <line stroke="currentColor" y2="6">
                                            </line>
                                            <text fill="currentColor" y="9" dy="0.71em">
                                                16
                                            </text>
                                        </g>
                                        <g class="tick" opacity="1" transform="translate(486,0)">
                                            <line stroke="currentColor" y2="6">
                                            </line>
                                            <text fill="currentColor" y="9" dy="0.71em">
                                                18
                                            </text>
                                        </g>
                                        <g class="tick" opacity="1" transform="translate(540,0)">
                                            <line stroke="currentColor" y2="6">
                                            </line>
                                            <text fill="currentColor" y="9" dy="0.71em">
                                                20
                                            </text>
                                        </g>
                                    </g>
                                    <g class="axis y" transform="translate(30, 20)" fill="none" font-size="10" font-family="sans-serif" text-anchor="end">
                                        <path class="domain" stroke="currentColor" d="M-6,215H0V0H-6">
                                        </path>
                                        <g class="tick" opacity="1" transform="translate(0,215)">
                                            <line stroke="currentColor" x2="-6">
                                            </line>
                                            <text fill="currentColor" x="-9" dy="0.32em">
                                                7.8
                                            </text>
                                        </g>
                                        <g class="tick" opacity="1" transform="translate(0,195.45454545454544)">
                                            <line stroke="currentColor" x2="-6">
                                            </line>
                                            <text fill="currentColor" x="-9" dy="0.32em">
                                                8.0
                                            </text>
                                        </g>
                                        <g class="tick" opacity="1" transform="translate(0,175.90909090909096)">
                                            <line stroke="currentColor" x2="-6">
                                            </line>
                                            <text fill="currentColor" x="-9" dy="0.32em">
                                                8.2
                                            </text>
                                        </g>
                                        <g class="tick" opacity="1" transform="translate(0,156.36363636363632)">
                                            <line stroke="currentColor" x2="-6">
                                            </line>
                                            <text fill="currentColor" x="-9" dy="0.32em">
                                                8.4
                                            </text>
                                        </g>
                                        <g class="tick" opacity="1" transform="translate(0,136.81818181818184)">
                                            <line stroke="currentColor" x2="-6">
                                            </line>
                                            <text fill="currentColor" x="-9" dy="0.32em">
                                                8.6
                                            </text>
                                        </g>
                                        <g class="tick" opacity="1" transform="translate(0,117.2727272727272)">
                                            <line stroke="currentColor" x2="-6">
                                            </line>
                                            <text fill="currentColor" x="-9" dy="0.32em">
                                                8.8
                                            </text>
                                        </g>
                                        <g class="tick" opacity="1" transform="translate(0,97.7272727272727)">
                                            <line stroke="currentColor" x2="-6">
                                            </line>
                                            <text fill="currentColor" x="-9" dy="0.32em">
                                                9.0
                                            </text>
                                        </g>
                                        <g class="tick" opacity="1" transform="translate(0,78.18181818181826)">
                                            <line stroke="currentColor" x2="-6">
                                            </line>
                                            <text fill="currentColor" x="-9" dy="0.32em">
                                                9.2
                                            </text>
                                        </g>
                                        <g class="tick" opacity="1" transform="translate(0,58.636363636363605)">
                                            <line stroke="currentColor" x2="-6">
                                            </line>
                                            <text fill="currentColor" x="-9" dy="0.32em">
                                                9.4
                                            </text>
                                        </g>
                                        <g class="tick" opacity="1" transform="translate(0,39.09090909090913)">
                                            <line stroke="currentColor" x2="-6">
                                            </line>
                                            <text fill="currentColor" x="-9" dy="0.32em">
                                                9.6
                                            </text>
                                        </g>
                                        <g class="tick" opacity="1" transform="translate(0,19.54545454545448)">
                                            <line stroke="currentColor" x2="-6">
                                            </line>
                                            <text fill="currentColor" x="-9" dy="0.32em">
                                                9.8
                                            </text>
                                        </g>
                                        <g class="tick" opacity="1" transform="translate(0,0)">
                                            <line stroke="currentColor" x2="-6">
                                            </line>
                                            <text fill="currentColor" x="-9" dy="0.32em">
                                                10.0
                                            </text>
                                        </g>
                                    </g>
                                    <g class="marks">
                                        <path fill="none" stroke="#B182FF" d="M30,117.7272727272727C39,133.13616593724254,48,148.54505914721236,57,166.5909090909091C66,184.63675903460583,75,205.31956571202952,84,215.45454545454544C93,225.58952519706136,101.99999999999999,225.17667800466944,111,166.5909090909091C120.00000000000001,108.00514017714876,129,-8.75355045797994,138,215.45454545454544C147,439.6626413670708,155.99999999999997,1004.8375238272503,165,997.2727272727271C174.00000000000003,989.707930718204,183,409.4034551489777,192,166.5909090909091C201,-76.22163696715948,210,18.45774648592976,219,215.45454545454544C228,412.4513444231611,237,711.7655589073033,246,899.5454545454544C255,1087.3253501836055,264,1163.5709269757645,273,997.2727272727271C282,830.9745275696898,291.00000000000006,422.1325513714562,300,235C308.99999999999994,47.86744862854379,318,82.44432208386479,327,117.7272727272727C336,153.01022337068062,345,188.99925120217543,354,215.45454545454544C363,241.90983970691545,372,258.83140038016063,381,235C390,211.16859961983934,398.99999999999994,146.58423818627278,408,117.7272727272727C417.00000000000006,88.87030726827263,426,95.74073778383897,435,117.7272727272727C444,139.71380767070644,452.99999999999994,176.8164470420075,462,215.45454545454544C471.00000000000006,254.09264386708338,480.00000000000006,294.26620132085804,489,264.31818181818176C497.99999999999994,234.3701623155055,507,134.30056585637817,516,117.7272727272727C525,101.15397959816723,534,168.0769897990836,543,235">
                                        </path>
                                    </g>
                                    <g class="marks">
                                        <path fill="none" stroke="#FFBEBE" d="M30,20C39,20.001491320599694,48,20.002982641199388,57,20C66,19.997017358800612,75,19.98956075580215,84,20C93,20.01043924419785,101.99999999999999,20.038774335592006,111,20C120.00000000000001,19.961225664407994,129,19.855341901829828,138,20C147,20.144658098170172,155.99999999999997,20.539858057088676,165,20C174.00000000000003,19.460141942911324,183,17.985225869815466,192,20C201,22.014774130184534,210,27.519238463649458,219,20C228,12.48076153635054,237,-8.062179724413305,246,20C255,48.062179724413305,264,124.72948043400379,273,117.7272727272727C282,110.72506502054162,291.00000000000006,20.053348897488984,300,20C308.99999999999994,19.946651102511016,318,110.5116694305857,327,117.7272727272727C336,124.94287602395971,345,48.809064289259005,354,20C363,-8.809064289259004,372,9.706618866923694,381,20C390,30.293381133076306,398.99999999999994,32.36446024304622,408,20C417.00000000000006,7.635539756953781,426,-19.164459839108574,435,20C444,59.164459839108574,452.99999999999994,164.29337911338806,462,166.5909090909091C471.00000000000006,168.88843906843013,480.00000000000006,68.35457974919272,489,20C497.99999999999994,-28.354579749192727,507,-24.529879928340776,516,20C525,64.52987992834078,534,149.7649399641704,543,235">
                                        </path>
                                    </g>
                                    <g class="marks">
                                        <path fill="none" stroke="#FFDCDC" d="M30,215.45454545454544C39,218.91448936306384,48,222.3744332715823,57,215.45454545454544C66,208.5346576375086,75,191.23493809491652,84,215.45454545454544C93,239.67415281417436,101.99999999999999,305.4130870760244,111,313.1818181818182C120.00000000000001,320.950549287612,129,270.7490772373496,138,215.45454545454544C147,160.1600136717413,155.99999999999997,99.77242215639527,165,117.7272727272727C174.00000000000003,135.68212329815015,183,231.97941595525108,192,215.45454545454544C201,198.9296749538398,210,69.58264129532773,219,215.45454545454544C228,361.32644961376315,237,782.4172915907106,246,801.8181818181818C255,821.2190720456529,264,438.93001052364724,273,313.1818181818182C282,187.43362583998913,291.00000000000006,318.22630267833676,300,313.1818181818182C308.99999999999994,308.1373336852996,318,167.25568785391465,327,215.45454545454544C336,263.6534030551762,345,500.93276408782276,354,508.63636363636357C363,516.3399631849044,372,294.46780124933946,381,215.45454545454544C390,136.44128965975142,398.99999999999994,200.2869400057284,408,215.45454545454544C417.00000000000006,230.62215090336247,426,197.1117114550195,435,215.45454545454544C444,233.79737945407138,452.99999999999994,303.99348690146627,462,313.1818181818182C471.00000000000006,322.3701494621701,480.00000000000006,270.55070457547936,489,215.45454545454544C497.99999999999994,160.35838633361155,507,101.98551297843446,516,117.7272727272727C525,133.46903247611095,534,223.32542532896457,543,313.1818181818182">
                                        </path>
                                    </g>
                                </g>
                            </svg>

                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Task_chart
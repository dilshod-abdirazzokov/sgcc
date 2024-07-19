import React from "react";
import { AiOutlineFolderView } from "react-icons/ai";
import { IoMdDownload } from "react-icons/io";

export default function AccordionData() {
  return (
    // max-w-screen-xl container mx-auto md:px-2 px-4
    <section>
        <div className="max-w-screen-2xl container mx-auto md:px-2 px-4">
           <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
            <div className="join join-vertical w-full">
                    <div className="flex justify-between items-center">
                    <h2 className="font-bold my-2 text-xl">Полиетилин техник характеристика</h2>
                    <div className="flex space-x-4">
                        <span><AiOutlineFolderView className="text-2xl" /></span>
                        <span><IoMdDownload className="text-2xl" /></span>
                    </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" defaultChecked /> 
                        <div className="collapse-title text-xl font-medium">
                           Литьевые марки | Литье под давлением
                        </div>
                        <div className="collapse-content"> 
                          {/* collapse-content */}
                          <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                <tr>
                                    <th></th>
                                    <th>Марка и Вид ПЭ</th>
                                    <th>Density, g/cm <sup>3</sup></th>
                                    <th>MFI, g/10min</th>
                                </tr>
                                </thead>
                                <tbody>
                                {/* row 1 */}
                                <tr>
                                    <th>1</th>
                                    <td>I-0754 | HDPE</td>
                                    <td>0,952 – 0,956 </td>
                                    <td>5,0 – 8,0</td>
                                </tr>
                                {/* row 2 */}
                                <tr className="hover">
                                    <th>2</th>
                                    <td>I-0760 | HDPE</td>
                                    <td>0,958 – 0,962</td>
                                    <td>5,5 – 8,5 </td>
                                </tr>
                                {/* row 3 */}
                                <tr>
                                    <th>3</th>
                                    <td>I-1561 | HDPE</td>
                                    <td>0,958 – 0,962</td>
                                    <td>13,0 – 18,0</td>
                                </tr>
                                {/* row 4 */}
                                <tr>
                                    <th>4</th>
                                    <td>I-2560 | HDPE</td>
                                    <td>0,958 – 0,962</td>
                                    <td>20,0 – 30,0</td>
                                </tr>
                                {/* row 5 */}
                                <tr>
                                    <th>5</th>
                                    <td>I-1625 | LLDPE</td>
                                    <td>0,922 – 0,928</td>
                                    <td>12,0 – 20,0</td>
                                </tr>
                                {/* row 6 */}
                                <tr>
                                    <th>6</th>
                                    <td>I-0525 | LLDPE</td>
                                    <td>0,923 – 0,927</td>
                                    <td>4,0 – 6,0</td>
                                </tr>
                                </tbody>
                            </table>
                            </div>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" /> 
                        <div className="collapse-title">
                          <h2 className="text-xl font-medium lowercase">FILM GRADES ПЛЕНОЧНЫЕ МАРКИ | Экструзия</h2>
                        </div>
                        <div className="collapse-content"> 
                        <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" /> 
                        <div className="collapse-title">
                          <h2 className="text-xl font-medium lowercase">КАБЕЛЬНЫЕ МАРКИ | Экструзия</h2>
                        </div>
                        <div className="collapse-content"> 
                        <p>hello</p>
                        </div>
                    </div>
                </div>
                <div className="join join-vertical w-full">
                    <div className="flex justify-between items-center">
                    <h2 className="font-bold my-2 text-xl">Полиетилин техник характеристика</h2>
                    <div className="flex space-x-4">
                        <span><AiOutlineFolderView className="text-2xl" /></span>
                        <span><IoMdDownload className="text-2xl" /></span>
                    </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" defaultChecked /> 
                        <div className="collapse-title">
                        <h2 className="text-xl font-medium lowercase">ТРУБНЫЕ МАРКИ | Экструзия</h2>
                        </div>
                        <div className="collapse-content"> 
                          {/* collapse-content */}
                          <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                <tr>
                                    <th></th>
                                    <th>Марка и Вид ПЭ</th>
                                    <th>Density, g/cm <sup>3</sup></th>
                                    <th>MFI, g/10min</th>
                                </tr>
                                </thead>
                                <tbody>
                                {/* row 1 */}
                                <tr>
                                    <th>1</th>
                                    <td>I-0754 | HDPE</td>
                                    <td>0,952 – 0,956 </td>
                                    <td>5,0 – 8,0</td>
                                </tr>
                                {/* row 2 */}
                                <tr className="hover">
                                    <th>2</th>
                                    <td>I-0760 | HDPE</td>
                                    <td>0,958 – 0,962</td>
                                    <td>5,5 – 8,5 </td>
                                </tr>
                                {/* row 3 */}
                                <tr>
                                    <th>3</th>
                                    <td>I-1561 | HDPE</td>
                                    <td>0,958 – 0,962</td>
                                    <td>13,0 – 18,0</td>
                                </tr>
                                {/* row 4 */}
                                <tr>
                                    <th>4</th>
                                    <td>I-2560 | HDPE</td>
                                    <td>0,958 – 0,962</td>
                                    <td>20,0 – 30,0</td>
                                </tr>
                                {/* row 5 */}
                                <tr>
                                    <th>5</th>
                                    <td>I-1625 | LLDPE</td>
                                    <td>0,922 – 0,928</td>
                                    <td>12,0 – 20,0</td>
                                </tr>
                                {/* row 6 */}
                                <tr>
                                    <th>6</th>
                                    <td>I-0525 | LLDPE</td>
                                    <td>0,923 – 0,927</td>
                                    <td>4,0 – 6,0</td>
                                </tr>
                                </tbody>
                            </table>
                            </div>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" /> 
                    <div className="collapse-title">
                      <h2 className="text-xl font-medium lowercase">ВЫДУВНЫЕ МАРКИ | Выдувное формование</h2>
                    </div>
                    <div className="collapse-content"> 
                    <p>hello</p>
                    </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" /> 
                    <div className="collapse-title">
                      <h2 className="text-xl font-medium lowercase">РОТАЦИОННЫЕ | Ротационное формование</h2>
                    </div>
                    <div className="collapse-content"> 
                    <p>hello</p>
                    </div>
                    </div>
                </div>
           </div>
        </div>
    </section>
  );
}

<script>
import drawingboard from './drawingboard.js';

export default {
  name: 'DentalChart',
  methods:{drawBox(obj,id){
   drawingboard.drawBox(obj,id);
  }
  }
}
</script>

<template>
  <div id="svgholder">
  <svg id="svg" viewBox="100 0 3500 1400" transform="scale(1.5,1)">
    <defs>
      <pattern id="pattern-stripe" width="4" height="4" patternUnits="userSpaceOnUse"
      patternTransform="rotate(45)">
        <rect width="2" height="4" transform="translate(0,0)" fill="white">
        </rect>
      </pattern>
      <mask id="mask-stripe">
        <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe)"
        />
      </mask>
      <marker id='arrow' orient='auto' markerWidth='2' markerHeight='2' viewBox="0 -5 10 10"
      refX='5' refY='0'>
        <path d='M0,-5L10,0L0,5' fill='red' />
      </marker>
      <pattern id="screw-stripe" width="4" height="4" patternUnits="userSpaceOnUse"
      patternTransform="rotate(80)">
        <rect width="2" height="4" transform="translate(0,0)" fill="white">
        </rect>
      </pattern>
      <mask id="mask-screw-stripe">
        <rect x="0" y="0" width="100%" height="100%" fill="url(#screw-stripe)"
        />
      </mask>
    </defs>

    <text id="lbl1" x="8" y="10" font-family="'Arial'" font-size="13px" tid="t_1">
      18
    </text>
    <text id="lbl2" x="40" y="10" font-family="'Arial'" font-size="13px" tid="t_2">
      17
    </text>
    <text id="lbl3" x="70" y="10" font-family="'Arial'" font-size="13px" tid="t_3">
      16
    </text>
    <text id="lbl4" x="110" y="10" font-family="'Arial'" font-size="13px"
    tid="t_4">
      4
    </text>
    <text id="lbl5" x="138" y="10" font-family="'Arial'" font-size="13px"
    tid="t_5">
      5
    </text>
    <text id="lbl6" x="175" y="10" font-family="'Arial'" font-size="13px"
    tid="t_6">
      6
    </text>
    <text id="lbl7" x="210" y="10" font-family="'Arial'" font-size="13px"
    tid="t_7">
      7
    </text>
    <text id="lbl8" x="239" y="10" font-family="'Arial'" font-size="13px"
    tid="t_8">
      8
    </text>
    <text id="lbl9" x="272" y="10" font-family="'Arial'" font-size="13px"
    tid="t_9">
      9
    </text>
    <text id="lbl10" x="302" y="10" font-family="'Arial'" font-size="13px"
    tid="t_10">
      10
    </text>
    <text id="lbl11" x="334" y="10" font-family="'Arial'" font-size="13px"
    tid="t_11">
      11
    </text>
    <text id="lbl12" x="370" y="10" font-family="'Arial'" font-size="13px"
    tid="t_12">
      12
    </text>
    <text id="lbl13" x="395" y="10" font-family="'Arial'" font-size="13px"
    tid="t_13">
      13
    </text>
    <text id="lbl14" x="425" y="10" font-family="'Arial'" font-size="13px"
    tid="t_14">
      14
    </text>
    <text id="lbl15" x="460" y="10" font-family="'Arial'" font-size="13px"
    tid="t_15">
      15
    </text>
    <text id="lbl16" x="492" y="10" font-family="'Arial'" font-size="13px"
    tid="t_16">
      16
    </text>
    <text id="lblupper" x="68" y="120" font-family="'Arial'" font-size="13px"
    rel="permanent">
      UPPER SIDE
    </text>
    <image style = "display:none" href="images/uparrow.png" x="135" y="110" height="10" width="30"
    rel="permanent" id="uparrow" />
    <text id="lblupper" x="220" y="120" font-family="'Arial'" font-size="13px"
    rel="permanent">
      PERMANENT
    </text>
    <text id="lbllower" x="362" y="120" font-family="'Arial'" font-size="13px"
    rel="permanent">
      LOWER SIDE
    </text>
    <image style = "display:none" href="images/downarrow.png" x="433" y="110" height="10" width="30"
    rel="permanent" id="downarrow" />
    <text id="lbl17" x="12" y="320" font-family="'Arial'" font-size="13px"
    tid="t_32">
      32
    </text>
    <text id="lbl8" x="45" y="320" font-family="'Arial'" font-size="13px"
    tid="t_31">
      31
    </text>
    <text id="lbl9" x="72" y="320" font-family="'Arial'" font-size="13px"
    tid="t_30">
      30
    </text>
    <text id="lb20" x="105" y="320" font-family="'Arial'" font-size="13px"
    tid="t_29">
      29
    </text>
    <text id="lb21" x="138" y="320" font-family="'Arial'" font-size="13px"
    tid="t_28">
      28
    </text>
    <text id="lb22" x="175" y="320" font-family="'Arial'" font-size="13px"
    tid="t_27">
      27
    </text>
    <text id="lb23" x="210" y="320" font-family="'Arial'" font-size="13px"
    tid="t_26">
      26
    </text>
    <text id="lb24" x="239" y="320" font-family="'Arial'" font-size="13px"
    tid="t_25">
      25
    </text>
    <text id="lb25" x="272" y="320" font-family="'Arial'" font-size="13px"
    tid="t_24">
      24
    </text>
    <text id="lb26" x="302" y="320" font-family="'Arial'" font-size="13px"
    tid="t_23">
      23
    </text>
    <text id="lb27" x="334" y="320" font-family="'Arial'" font-size="13px"
    tid="t_22">
      22
    </text>
    <text id="lb28" x="370" y="320" font-family="'Arial'" font-size="13px"
    tid="t_21">
      21
    </text>
    <text id="lb29" x="395" y="320" font-family="'Arial'" font-size="13px"
    tid="t_20">
      20
    </text>
    <text id="lb30" x="425" y="320" font-family="'Arial'" font-size="13px"
    tid="t_19">
      19
    </text>
    <text id="lb31" x="460" y="320" font-family="'Arial'" font-size="13px"
    tid="t_18">
      18
    </text>
    <text id="lb32" x="492" y="320" font-family="'Arial'" font-size="13px"
    tid="t_17">
      17
    </text>
    <text id="lbl33" x="110" y="340" font-family="'Arial'" font-size="13px"
    tid="t_A">
      A
    </text>
    <text id="lbl34" x="143" y="340" font-family="'Arial'" font-size="13px"
    tid="t_B">
      B
    </text>
    <text id="lbl35" x="175" y="340" font-family="'Arial'" font-size="13px"
    tid="t_C">
      C
    </text>
    <text id="lbl36" x="210" y="340" font-family="'Arial'" font-size="13px"
    tid="t_D">
      D
    </text>
    <text id="lbl37" x="239" y="340" font-family="'Arial'" font-size="13px"
    tid="t_E">
      E
    </text>
    <text id="lbl38" x="272" y="340" font-family="'Arial'" font-size="13px"
    tid="t_F">
      F
    </text>
    <text id="lbl39" x="305" y="340" font-family="'Arial'" font-size="13px"
    tid="t_G">
      G
    </text>
    <text id="lbl40" x="334" y="340" font-family="'Arial'" font-size="13px"
    tid="t_H">
      H
    </text>
    <text id="lbl41" x="379" y="340" font-family="'Arial'" font-size="13px"
    tid="t_I">
      I
    </text>
    <text id="lb142" x="420" y="340" font-family="'Arial'" font-size="13px"
    tid="t_J">
      J
    </text>
    <text id="lblupper" x="110" y="390" font-family="'Arial'" font-size="13px"
    rel="primary">
      UPPER SIDE
    </text>
    <image href="images/uparrow.png" x="178" y="380" height="10" width="30"
    rel="primary" id="uparrow" />
    <text id="lblupper" x="240" y="390" font-family="'Arial'" font-size="13px"
    rel="primary">
      PRIMARY
    </text>
    <text id="lbllower" x="350" y="385" font-family="'Arial'" font-size="13px"
    rel="primary">
      LOWER SIDE
    </text>
    <image href="images/downarrow.png" x="420" y="375" height="10" width="30"
    rel="primary" id="downarrow" />
    <text id="lbl43" x="110" y="500" font-family="'Arial'" font-size="13px"
    tid="t_T">
      T
    </text>
    <text id="lbl44" x="143" y="500" font-family="'Arial'" font-size="13px"
    tid="t_S">
      S
    </text>
    <text id="lbl45" x="173" y="500" font-family="'Arial'" font-size="13px"
    tid="t_R">
      R
    </text>
    <text id="lbl46" x="203" y="500" font-family="'Arial'" font-size="13px"
    tid="t_Q">
      Q
    </text>
    <text id="lbl47" x="237" y="500" font-family="'Arial'" font-size="13px"
    tid="t_P">
      P
    </text>
    <text id="lbl48" x="272" y="500" font-family="'Arial'" font-size="13px"
    tid="t_O">
      O
    </text>
    <text id="lbl49" x="303" y="500" font-family="'Arial'" font-size="13px"
    tid="t_N">
      N
    </text>
    <text id="lbl50" x="334" y="500" font-family="'Arial'" font-size="13px"
    tid="t_M">
      M
    </text>
    <text id="lbl51" x="375" y="500" font-family="'Arial'" font-size="13px"
    tid="t_L">
      L
    </text>
    <text id="lb152" x="425" y="500" font-family="'Arial'" font-size="13px"
    tid="t_K">
      K
    </text>
    <svg rel="1T" @click="drawBox($event,'1T');">
      <svg rel="1G">
        <svg viewBox="200 -10 13.6 350" id="t8-root" class="width-height1" rel="1">
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#D0C9A3" stroke="#A7A9AC"
          stroke-width=".283" stroke-miterlimit="22.926" d="M5.5 10.1c1.4-1.4.4-9 3.5-9.1 1.5 0 .8 3.2.9 4.1V9l-4.4 1.1z">
          </path>
          <path fill-rule="evenodd" rel="CR1" clip-rule="evenodd" fill="#F2ECBE"
          stroke="#A7A9AC" stroke-width=".283" stroke-miterlimit="22.926" d="M1.2 26.1c-.5-1.5-.9-3.1-1-5.5C-.4 10.4 3.7 8.8 5.1 4.9 6.2 0 7.7-.3 8.1.3c.8.8-.2 6.4.4 6.6.1-1.3.3-2.9.7-4.2.7-2.4 2.1-1.7 2 .1 0 1.1.8 3.3 1 4 1.5 5.5 1.9 13.1.5 17.2l-5.6 2c-1.7.5-5.2-.1-5.9.1z">
          </path>
        </svg>
        <svg id="t8-crown" viewBox="200 -33 18.5 350" class="width-height1" rel = "1A">
           <path id="257"  rel = "CR2" fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-257'] ? '#fff000' : '' )}"   stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M.4 8.2C.3 8.8.3 9.3.3 9.6c0 1.1.1 1.6.3 1.9 0 0 .1.2.2.3.8 1.6 2.3 2.2 2.7 2.3 1.1.3 2.3.2 3.5-.3 1.1.5 3.4 1.3 5.5-.4.6.4 1.3.8 2.1.8.3 0 .9 0 1.6-.3 1.3-.6 1.7-2 2-2.9.3-.9.3-1.7.3-2.2 0-.1 0-1.1-.3-2.2-.5-2.4-2.1-4.4-2.6-5-1.1-.1-2.5 0-3.1-.4C12 1 11.7 0 10.9 0 9.7 0 8.5 1.2 7.8 1.5c-1.8.7-3.7.2-4.3.6C1.6 3.4.8 6.2.4 8.2z"></path>
           <path id="258" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-258'] ? '#fff000' : '' )}"   stroke="#939598" stroke-width=".216" d="M6.8 13.9c2-1.8 4.2-4.4-.7-8M12.3 13.5c-2.8-1.5-5.2-4 .5-8"></path>
           <circle cx="10" cy="10" r="2" fill="red"/>
        </svg>
      </svg>
      <svg id="t8-surface" viewBox="200 -55 21 350" class="width-height1" rel="1B">
        <path fill-rule="evenodd" clip-rule="evenodd" id="295" fill="#FFFFFF"
        style="fill:#{(soapNoteForm.dentalMap['A-295'] ? '#fff000' : '' )}" 
        stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M2.7 13.2c-.4-.8-2-2-2.4-3-.2-.7-.2-1.7 0-2.7C1 3.7 3.5 2.2 5.1 1 6.4.2 7.5-.1 8.8.5c1.6.7 4 3.1 5 3.1.9 0 1.8.1 2.7.2.9.1 1.5.3 2.1.7.8.4 1.5 1.4 2.1 2.2.3.3.2 1.9-.2 2.8-.6 1.5-1.7 2.5-1.9 2.9-.1.2 0 .8.3 1.2.3.6.2 1.9-.1 2.5-.5 1.1-3.8 3.6-6 4.4-1.2.6-3.2.8-4.1.2-1.3-1.2-6.5-1.1-6.2-5.5 0-.6.2-1.5.2-2z">
        </path>
        <path id="296" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-296'] ? '#fff000' : '' )}"
         stroke="#939598" stroke-width=".216" d="M4.8 12.2c-.7-.9-1.5-1.7-2.2-2.6-.8-1.1.3-1.6.1-3 .2-.9 1-1.3 2.2-1.2 1.5-.4 1.9.5 2.5.6.3.7.1 1.6.2 2.4 0 1.7 1.5 1.3 2.4 1.3 2.2-.6.7-2.1 1.8-2.9-.1-.5 0-.8.2-1 .8-.2 1-.4 1.8-.3.4.1 1.2.3 1.3.7 0 1.2-.1 2.3-.1 3.5.4.4 1.2.6 1.3 1.1.1.5-.3 1.3-.5 1.9l-.3.9c-.8-.6-.9-2.1-2.3-1.7-.5.1-.8.5-1.3.6-.4.1-.9-.2-1.3-.2-.6 0-1.3.2-1.9.3-.6.2-1 .7-1.3 1.3-.3.7-.4 1.4-1.4 1.6-.5 0-.9-.1-1-.9.2-.6.2-.8.6-1.1.2-.6 0-1-.8-1.3z">
        </path>
        <path id="297" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-297'] ? '#fff000' : '' )}"
         stroke="#939598" stroke-width=".216" d="M2.7 13.2c1 0 2.1-.6 2.1-.9 0-.2-1.9-2.2-2.2-2.6-.4-.6-.4-1.3-.1-1.7.3-.3.3-1 .2-1.4M4.9 5.4c.5-.1 1.2-.1 1.5 0 .1 0 .3.3.6.5s.6 0 .7.4c.1.8.1 1.8 0 2.7M12.5 5.8c-.2-.1-.7.1-.8.3-.1.1.3.6 0 .9-.2.2-.4.4-.4.6 0 .6 0 1.5-.2 1.5-.3 0-.6.8-2.3.5M15.2 6.1c-.2 1.3-.3 3.9 0 4 .4.2 1 .1 1.2 0 .7-.5 1.1-.9 1.2-1.4M6.8 12.2c.7-.7 1.4-1.1 2.1-1.2.9 0 2.5.2 3 0 .8-.4 1.9-.5 2.5-.4M18.6 12.4c-.4-.1-1.1.1-1.3.1-.2 0-.8-.5-1-.5-.2 0-.5 1.8-.6 1.8-.1 0-1.1-1.5-1.3-1.7-.2-.2-.9-.1-1.3 0-.2 0-.4.3-.6.4-.2.1-.6.1-1 0-.3-.1-.9-.1-1.3 0">
        </path>
        <path id="298" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-298'] ? '#fff000' : '' )}"
         stroke="#939598" stroke-width=".216" d="M11.9 14.7c-.2-.1-.5-.9-.6-1.3-.1-.3 0-.7.1-.9M5.8 13.7c-.3 0-.5.5-.6 1.1 0 .2.4.8.5.8.3 0 .8.1.9 0 .4-.4.8-1.1.9-1.6">
        </path>
      </svg>
      <svg rel="1G">
        <svg id="t8-crown" viewBox="200 -75 18.5 350"  class="width-height1" rel = "1A">
           <g transform="rotate(180) translate(-20,-25)">
             <path id="257"  rel = "CR2" fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-257'] ? '#fff000' : '' )}"   stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M.4 8.2C.3 8.8.3 9.3.3 9.6c0 1.1.1 1.6.3 1.9 0 0 .1.2.2.3.8 1.6 2.3 2.2 2.7 2.3 1.1.3 2.3.2 3.5-.3 1.1.5 3.4 1.3 5.5-.4.6.4 1.3.8 2.1.8.3 0 .9 0 1.6-.3 1.3-.6 1.7-2 2-2.9.3-.9.3-1.7.3-2.2 0-.1 0-1.1-.3-2.2-.5-2.4-2.1-4.4-2.6-5-1.1-.1-2.5 0-3.1-.4C12 1 11.7 0 10.9 0 9.7 0 8.5 1.2 7.8 1.5c-1.8.7-3.7.2-4.3.6C1.6 3.4.8 6.2.4 8.2z"></path>
             <path id="258" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-258'] ? '#fff000' : '' )}"   stroke="#939598" stroke-width=".216" d="M6.8 13.9c2-1.8 4.2-4.4-.7-8M12.3 13.5c-2.8-1.5-5.2-4 .5-8"></path>
             <circle cx="10" cy="10" r="2" fill="red"/>
           </g>  
          </svg>
      </svg>    
    </svg>
    <svg rel="32T" @click="drawBox($event,'32T')">
     <g  transform = "translate(0,100)"> 
      <svg rel="32G">
        <svg id="b8-root" viewBox="198 -139 17.1 350" class="width-height1" rel="32">
           <g transform="rotate(180) translate(-20,35)">   
             <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="420" fill="#FFFFFF"
             style="fill:#{(soapNoteForm.dentalMap['A-420'] ? '#fff000' : '' )}" 
             stroke="#939598" stroke-width=".283" d="M10.5 3.5c1.2-1.1 2.3-1.8 3.3-2.4 1-.5 2.3-.4 3.4.1 2.3 1.2 3.7 3.2 4.3 5.1.5 1.1.6 3 .2 4.2-.6 1.5-1.4 4.4-2.4 4.4-1.1-.3-1.8-.2-2.7 0-1.3.5-3.1.9-3.7.9-.8 0-2.6-.4-3.9-.8-.9-.3-2.8-.6-5.6.2-.7-.5-.6-1.3-.6-1.9 0-.8-.5-1.9-.9-2.4C1.1 10.1-.2 7 .2 5.2c.3-2 2.7-5.2 4.1-5 2-.1 4.3 1.8 6.2 3.3z">
             </path>           
           </g>
        </svg>       
        <svg id="b8-surface" viewBox="210 -118 22.5 370" class="width-height1"
        rel="32B">
          <path fill-rule="evenodd" clip-rule="evenodd" id="354" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-354'] ? '#fff000' : '' )}" 
          stroke="#939598" stroke-width=".283" d="M1.1 9.5c0-.5-.3-1.2-.4-1.9C.5 6.4.5 4.7.8 4.1c.6-1.3 1.9-3 3.5-3.5s4-.5 4.3-.4c.3.1.8 1 1 1.1.4 0 .8-.7 1.2-.8C12 0 14.6.1 15.2.3c2.3 1.1 4.5 3.3 5.2 4.6.3 1.1.2 3.4-.2 3.7.6.6 1.9 2.8 2.1 3.6.1.7.1 2-.1 2.6-1.7 3.8-3.5 4.6-5.6 5.6-1.3.3-3.5.2-4.3-.1-1.6-.4-5.7-.7-8.1-2-2-1.4-3.5-4.3-4-7.4-.1-.5.7-.9.9-1.4z">
          </path>
          <path id="355" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-355'] ? '#fff000' : '' )}"
           stroke="#939598" stroke-width=".216" d="M5.3 9.6c-.5-.8-.1-2.4.7-2.5.7-.2 1.5-.1 1.9 0 .4-.4.9-.7 1.9-.7.7.3 1.3.7 2 1 .8.1 1.5-.1 2.3.2.7.3 1 1 1.6 1.2.6.2 1.1.4 1.7.6.3.5 1.1.8 1.5 1.7.1.3.3.6.4 1-.5.4-1.3 1.1-1.7 1.5-.4.6-.9 1-1.5 1.1-.9 0-1.9.1-2.8.1-.7-.1-1.3-.2-1.4-.5-.3-.4-.3-1.6-1-2.1-.5-.2-.4-.3-.9-.5-.4-.3-.8-.4-1.3-.4-.7-.3-1.2.4-1.7 1.2-.6.9-1.1 1.3-1.4 1.3-.6.1-.9-.1-1.1-1.6-.2-.3-.3-.6-.5-.9.1-.6.3-1 .6-1.4.1-.3.5-.1.7-.3z">
          </path>
          <path id="356" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-356'] ? '#fff000' : '' )}"
           stroke="#939598" stroke-width=".216" d="M17.5 13.7c.3-.5 1.7-1.3 1.8-1.6 0-.2-.7-1.6-1.1-1.8-.3-.2-.7-.5-.8-.9M11.9 14.3c0 .2.4.4.8.5 1.2 0 2.4 0 3.5-.1">
          </path>
          <path id="357" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-357'] ? '#fff000' : '' )}"
           stroke="#939598" stroke-width=".216" d="M20.2 8.6c-1-.4-1.7.8-2.8.9-.7-.2-1.6-.6-2.5-.9-.4-.2-1-.1-1.4.2-.4.3-1.3.2-2 .3.5 1.1.1 3.1-.3 3.3-.2.1-1.6-.8-2-1-.3-.1-1.1-.1-1.4 0-.3.1-1.8 2.2-2.1 2.4-.2.1-.5.1-.8 0M1.1 9.5c.8-.7 1.9-1.4 2.3-1.4.5 0 .7.9 1.1 1 .3 0 .8.3.8.4 0 .1-.7.2-.9.3-.2.2-.6 1-.6 1.4 0 .3.4.6.5.9M16.2 5.3c-.5.8-1.7 1.4-2.1 1.6-.4.2-1.8.5-2.3.5-.6-.1-1.1-.6-1.8-1-.4 0-.7-.1-1 0-.2.1-1.1.6-1.1.7 0 .3 1.8.4 3.6 1.9">
          </path>
          <path id="358" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-358'] ? '#fff000' : '' )}"
           stroke="#939598" stroke-width=".216" d="M6.7 4.3c.6.8 1.5 1.8 2.4 2 .4 0 1-.1 1.3-.1 1.3-.3 2.3-.9 3.3-1.6">
          </path>
          <path id="359" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-359'] ? '#fff000' : '' )}"
          stroke="#939598" stroke-width=".216" d="M9.6 1.3c-.1.4-.2.9 0 1.4.2.4.6.6.8 1.2.1.6.2 1.3 0 1.6-.2.3-.6.7-1.1.9M15.5 2.8l1.7-1.4">
          </path>
        </svg>
      </svg>
      <svg id="b8-crown" viewBox="199 -138 22.1 350" class="width-height1" rel="32A">
        <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="420" fill="#FFFFFF"
        style="fill:#{(soapNoteForm.dentalMap['A-420'] ? '#fff000' : '' )}" 
        stroke="#939598" stroke-width=".283" d="M10.5 3.5c1.2-1.1 2.3-1.8 3.3-2.4 1-.5 2.3-.4 3.4.1 2.3 1.2 3.7 3.2 4.3 5.1.5 1.1.6 3 .2 4.2-.6 1.5-1.4 4.4-2.4 4.4-1.1-.3-1.8-.2-2.7 0-1.3.5-3.1.9-3.7.9-.8 0-2.6-.4-3.9-.8-.9-.3-2.8-.6-5.6.2-.7-.5-.6-1.3-.6-1.9 0-.8-.5-1.9-.9-2.4C1.1 10.1-.2 7 .2 5.2c.3-2 2.7-5.2 4.1-5 2-.1 4.3 1.8 6.2 3.3z">
        </path>
      </svg>
      <svg id="b8-root" viewBox="198 -152 17.1 350" class="width-height1" rel="32">
        <path rel="CR1" fill-rule="evenodd" clip-rule="evenodd" fill="#F2ECBE"
        stroke="#939598" stroke-width=".283" stroke-miterlimit="22.926" d="M1 1.7C-.4 3.6.3 9.8.5 11.1 2 19 4.5 21.9 8.4 24.4c.5.4 2.1 1.3 3.6 1 .6-.2.9-1.2.8-2.1 0 0 .1 0 .1.1.3.8.6 1.4 1.1 1.4.6.2 1.1 0 1.5-.7.5-.5-.2-5.8.3-8.7.1-.8.6-1.7.8-2.3.3-.9.6-6.8.1-11.3-1.7-.5-3.3-1.1-5-1.6-3.7.5-7 1-10.7 1.5z">
        </path>
      </svg>
     </g> 
    </svg>
    <svg rel="2T" @click="drawBox($event,'2T')">
      <svg rel="2G">
        <svg viewBox="195 -10 20.6 390" id="t7-root" class="width-height1" rel="2">
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#D0C9A3" stroke="#A7A9AC"
          stroke-width=".283" stroke-miterlimit="22.926" d="M1.9 15.1l3.4-5.9c1.4-1.3.4-9 3.4-9.1 1.5 0 .8 3.2.9 4.1.1 3.2.1 5.8 1.5 9.2L11 24.3l-7.2 1-1.9-10.2z">
          </path>
          <path rel="CR1" fill-rule="evenodd" clip-rule="evenodd" fill="#F2ECBE"
          stroke="#A7A9AC" stroke-width=".283" stroke-miterlimit="22.926" d="M2.9 31c-.5.2-1.5-1.2-2-1-.5-1.5-.9-3.3-.7-5.5C.6 17.9 1.2 13 3 8.1c.5-1.4 3-6.4 4.9-5.4.5 1.3-1.4 3.5-1.8 15.2-.2 2.8.7 6 1.6 5.8 1.4-.3 1.8-3.6 1.9-8.2 0-1.8-.6-7.4-.6-7.9-.7-4.6 1.8-1.5 1.9-1.5 5 5 3.6 16.3 2.3 23.3l-6.4.4L2.9 31z">
          </path>
        </svg>
        <svg id="t7-crown" viewBox="200 -34 20.1 390" class="width-height1" rel="2A">
          <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="259" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-259'] ? '#fff000' : '' )}" 
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M.2 11.7c-.5 1.7 3.1 4.3 5.7 4.8 2.7 0 4-2.5 4.5-3.4.7 1.4 2.8 2.7 6.2 2.5 1.7-.3 3.9-1.7 3.3-5.6-.4-2.5-1.5-8.3-7.5-9.9C9 .3 8 3.3 5.6 2.6c-1.4-.4-1.6.2-1.7.5C3 5.5.4 7.9.2 11.7z">
          </path>
          <path id="260" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-260'] ? '#fff000' : '' )}"
          stroke="#939598" stroke-width=".216" d="M10.4 13.1c.5-1.6-.1-3.5-1.5-4.9M10.5 11c.2-2.4 1-4.1 2.7-4.8">
          </path>
        </svg>
      </svg>
      <svg id="t7-surface" viewBox="198 -60 20.1 390" class="width-height1"
      rel="2B">
        <path fill-rule="evenodd" clip-rule="evenodd" id="299" fill="#FFFFFF"
        style="fill:#{(soapNoteForm.dentalMap['A-299'] ? '#fff000' : '' )}" 
        stroke="#939598" stroke-width=".283" d="M1.7 12.4c-.1-.3-1.1-.5-1.4-1.6-.1-.8-.2-1.6 0-2.6.5-2.5 1.3-4.6 6-7.8.8-.5 2.7-.3 3.8.3 5.8 3.1 6 3.1 9.5 8.7.5 1.1.6 7 .1 8.1-.9 2.8-2.5 5.2-5.4 5.6-.3 0-.5.5-.8.6-.6.3-1.8.5-2.2.2-.3-.3-1.1-.6-1.4-.6-.3.1-.6.3-.9.3-1 .4-2.6.2-3.3-.3-.9-.6-3-1.9-4.7-5.1-.3-.8-.4-2.2-.3-3.3.1-.8.5-1.6 1-2.5z">
        </path>
        <path id="300" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-300'] ? '#fff000' : '' )}"
         stroke="#939598" stroke-width=".216" d="M12.5 14c.2-.3 0-.6-.1-.9-.1-.1.9-.9 1.3-.8.6 0 .1 2.8.6 3.1.4.3.7.6.7 1-.1.6-2 5.6-5.3 7">
        </path>
        <path id="301" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-301'] ? '#fff000' : '' )}"
         stroke="#939598" stroke-width=".216" d="M1.6 12.3c.4.3 1.9-.2 2.1.3.3.4 1 2.5 1.5 2.6.6-.1 1.7-2.1 2.1-2.2.6-.1.7-.4 1.1-.5 1-.2 2.1-.2 2.4-.1.4.3.5.8.4 1.3.1.4.9 0 1.3.3.5.5 1 1.3 1.4 1.5.4.2 1.5-.2 2.1.4.7.3 2-1.6 2.4-1.6.4-.1 1.1 0 1.5-.1M.3 10.8c0-1.4 1-2.8 1.3-2.7.2.1-.3 1.6 0 2.2">
        </path>
        <path id="302" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-302'] ? '#fff000' : '' )}"
         stroke="#939598" stroke-width=".216" d="M5.8 17.2c.1-.4.1-1 0-1.4-.1-.3-.3-.4-.6-.6M4.4 7.8c.4 1.2-.1 2.2 0 2.9.1.5 1.5 1.9 2.9 2.3M8 8c.6.3 1.2.5 1.2.9s.8 1.9.7 2.4c-.1.5-.7.7-.7 1.2M12.5 8.2c-.2 1.3-1.4 2.2-1.4 2.8.1.5-.3 1-.2 1.4.5.4.5.9.4 1.3-.3.3-.5.6-.3 1s.7.9.7 1.2c0 .3-.3.7-.5.8-.3.1-.7.4-.9.7M17.4 15.2c-.1-.4-.2-1-.5-1.3-.2-.2 0-.7-.1-1.1-.1-.2-.5-.2-.6-.5.1-.4.4-.6.8-.8">
        </path>
      </svg>
      <svg rel="2G">
         <svg id="t7-crown" viewBox="200 -75 20.1 390" class="width-height1" rel="2A">
           <g transform="rotate(180) translate(-23,-35)">
            <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="259" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-259'] ? '#fff000' : '' )}" 
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M.2 11.7c-.5 1.7 3.1 4.3 5.7 4.8 2.7 0 4-2.5 4.5-3.4.7 1.4 2.8 2.7 6.2 2.5 1.7-.3 3.9-1.7 3.3-5.6-.4-2.5-1.5-8.3-7.5-9.9C9 .3 8 3.3 5.6 2.6c-1.4-.4-1.6.2-1.7.5C3 5.5.4 7.9.2 11.7z">
            </path>
            <path id="260" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-260'] ? '#fff000' : '' )}"
             stroke="#939598" stroke-width=".216" d="M10.4 13.1c.5-1.6-.1-3.5-1.5-4.9M10.5 11c.2-2.4 1-4.1 2.7-4.8">
            </path>
           </g>  
          </svg>
      </svg>    
    </svg>
    <svg rel="31T" @click="drawBox($event,'32T')">
      <g  transform = "translate(0,100)"> 
        <svg rel="31G">
          <svg id="b7-crown" viewBox="197 -161 16.4 390" class="width-height1" rel="31">
             <g transform="rotate(180) translate(-20,45)">
               <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="421" fill="#FFFFFF"
               style="fill:#{(soapNoteForm.dentalMap['A-421'] ? '#fff000' : '' )}" @click="drawBox($event,421);"
               stroke="#939598" stroke-width=".283" d="M9.6 4.3c1.4-1.2 2.5-3 3.8-3.8C17-1.2 20.1 4 20.8 6.1c.8 3.1-.6 7.4-1.6 9.2-.5.6-2.3.2-3.8.2-2 .2-3.5 1.7-5.2 1.8-.9 0-3.8-.5-6-2.1C2.8 14.4.7 8.7.4 8.1-.7 5.5 2.8 2.2 3.8 1.3c.6-.3 1.3-.2 1.9 0 1.5.8 3.1 1.9 3.9 3z">
               </path>
               <path id="422" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-422'] ? '#fff000' : '' )}"
                @click="drawBox($event,422);" stroke="#939598" stroke-width=".216" d="M10.9 8.6c.1-1.5-.5-3.2-1.3-4.2M13.8 9.3c-.5-.3-3.1-1.6-4.9.2">
               </path>
             </g>       
          </svg>        
          <svg id="b7-surface" viewBox="198 -125 22.5 390" class="width-height1"
          rel="31B">
            <path fill-rule="evenodd" clip-rule="evenodd" id="360" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-32'] ? '#fff000' : '' )}" @click="drawBox($event,360);"
            stroke="#939598" stroke-width=".283" d="M20.7 7.4c.3-.5.6-.8.7-1.3.1-.7.1-2-.1-2.7-.2-.8-.9-1.7-1.8-2.2-1.2-.6-2.2-.6-3.1-.1-.3.1-.4.5-.6.6-.5 0-.6-.7-1.2-.8-1-.2-1.2-.8-1.9-.7-.6 0-1.2.5-1.4.7-.3.3-.3.7-.6.8-.3 0-.5-.4-.7-.6C9.8.8 9 .3 8.3.3c-.6-.1-.9.3-1.4.3-.4 0-2.5 0-2.9.3-.7.4-1.5 1-1.9 2.5-.1 1.1-.7 1.2-.6 2.4 0 1.1.5 1 .5 1.3C2 7.4.7 7.9.3 9.3c-.3 1.1-.2 2.6 0 3.3.2.7.7 1.7 1.2 2.4.8 1.1 1.8 2 2.6 2.5.7.3 1.7.4 2.4.6.5.1 2.7 1.2 3.8 1.5 1.5.3 3.2.3 4.7 0 1-.2 2 0 3-.3 1.4-.4 3.7-4.7 4.1-5.6.4-1.1.3-2.7-.1-3.3-.3-.5-.3-2.1-1.3-3z">
            </path>
            <path id="361" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-361'] ? '#fff000' : '' )}"
            @click="drawBox($event,361);" stroke="#939598" stroke-width=".216" d="M4.6 4.4c.2.9.4 1.6.9 2.1.6.9 1.5 1.1 2.3 1.3.8.1 1.3-.2 2-.6.7-.1 1.3-.2 2-.3 1.4-.2 2.4-.2 3.2 0 1 .2 1.9.6 2.9 1.2.9.7 1.6 1.5 2.3 2.2.2.5.1 1-.5 1.4-.4.3-1.1.3-1.5.2-.6.2-1.5.1-2.1-.1-.3.5-.6.8-1.5 1-.6.1-1.1 0-1.4-.2-.8-.7-.9-.8-1.4-.5-.4.2-.7.4-1.1.6-.8.1-1.5 0-2.1-.2l-2.4-.3c-.2-.1-.4 0-.6-.1-1-.2-2-.6-2.3-1.1-.5-.5-.8-1.1-.7-1.8.3-1.1 1-1.7 1.6-2.1-.3-1-.2-1.9.4-2.7z">
            </path>
            <path id="362" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-362'] ? '#fff000' : '' )}"
            @click="drawBox($event,362);" stroke="#939598" stroke-width=".216" d="M20.1 10.4c-.8-1.1-2.1-2.2-2.9-2.6-.5-.2-1-.5-1.6-.6-2.1-.6-2.9-.4-4.3-.1-.3.1-1.1 0-1.5.2-.7.2-.8.6-1.4.6-.5 0-.9 0-1.3-.3-1-.3-1.6-.9-2.1-1.8-.2-.4-.2-1.3-.4-1.4-.4.1-.8 1.2-.5 2.9 0 .3-.9.5-1.5 1.6-.1.4-.2.7-.2 1 0 .3.4.9.7 1.3">
            </path>
            <path id="363" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-363'] ? '#fff000' : '' )}"
            @click="drawBox($event,363);" stroke="#939598" stroke-width=".216" d="M20.7 7.4c-.8-.2-1.7-.2-2.1-.1-.5.1-.9.5-1.4.6M15.4 9.1c.3.3.6.7.7 1.2.1.5 0 1.1-.1 1.6-.2.3-.5.7-.8.8-.2.1-1.1.4-1.3.3-.2-.1-1-.4-1.3-.8M18.1 12c-.8.1-1.5.1-2.1-.1M13 9.4c-.5.6-1.2 1.2-1.3 1.4-.1.4.2 1.3.1 1.5-.2.2-1.1.7-1.6.8-.5 0-2.8-.6-3.2-.6-.5-.1-1.3.1-1.5-.2-.1-.2.1-.7.1-1.2 0-.4-.2-1.2.1-1.3.6-.2.3-1.8 1.4-2.2">
            </path>
            <path id="364" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-364'] ? '#fff000' : '' )}"
            @click="drawBox($event,364);" stroke="#939598" stroke-width=".216" d="M9.8 9c0 .5-.6 1-.8 1.3-.5.7.1 1.9-.4 2.5">
            </path>
          </svg>
        </svg>
        <svg id="b7-crown" viewBox="198 -152 21.2 390" class="width-height1" rel="31A">
          <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="421" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-421'] ? '#fff000' : '' )}" @click="drawBox($event,421);"
          stroke="#939598" stroke-width=".283" d="M9.6 4.3c1.4-1.2 2.5-3 3.8-3.8C17-1.2 20.1 4 20.8 6.1c.8 3.1-.6 7.4-1.6 9.2-.5.6-2.3.2-3.8.2-2 .2-3.5 1.7-5.2 1.8-.9 0-3.8-.5-6-2.1C2.8 14.4.7 8.7.4 8.1-.7 5.5 2.8 2.2 3.8 1.3c.6-.3 1.3-.2 1.9 0 1.5.8 3.1 1.9 3.9 3z">
          </path>
          <path id="422" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-422'] ? '#fff000' : '' )}"
           @click="drawBox($event,422);" stroke="#939598" stroke-width=".216" d="M10.9 8.6c.1-1.5-.5-3.2-1.3-4.2M13.8 9.3c-.5-.3-3.1-1.6-4.9.2">
          </path>
        </svg>
        <svg id="b7-root" viewBox="197 -167 16.4 390" class="width-height1" rel="31">
          <path rel="CR1" fill-rule="evenodd" clip-rule="evenodd" fill="#F2ECBE"
          stroke="#939598" stroke-width=".283" stroke-miterlimit="22.926" d="M12.8.1l2.6 1.5c.8 4.7 1.1 9.5.8 14.3-.5 8.2-1.1 10.9-2.2 11.1-1.7.1-2.4-5.1-2.6-6.2-.1-2.1-1.8-4.8-1.9-5.5-.3-1-.3-5-1.4-5.2-.4.5-1.9 4.2-.5 10.3.3 1.2 2.5 7.9 1.6 8.3C5.7 30.3.4 14.8.3 11.3 0 9.4.1 2.9.7 1.5L12.8.1z">
          </path>
        </svg>
      </g>  
    </svg>
    <svg rel="3T" @click="drawBox($event,'3T')">
      <svg rel="3G">
        <svg viewBox="175 -10 18.2 390" id="t6-root" class="width-height1" rel="3">
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#D0C9A3" stroke="#A7A9AC"
          stroke-width=".283" stroke-miterlimit="22.926" d="M3.9 15l1.2-5.4c.7-.7 2.3-4.8 3.1-7.9C8.5.7 9.4.2 10 .2c1.3.1 1.6 2.4 1.6 3.3.1 3.2.1 6.4 1.5 9.8l-.7 7.2-6.3 1.1L3.9 15z">
          </path>
          <path rel="CR1" fill-rule="evenodd" clip-rule="evenodd" fill="#F2ECBE"
          stroke="#A7A9AC" stroke-width=".283" stroke-miterlimit="22.926" d="M4.3 29.2L2.2 29v-4.7c.1-3 .1-2.7-.8-5.4-.6-1.8-1-3.7-1.2-5.8-.2-3.3.2-5.6 1-8.8.4-1 1.4-2.6 3-3.1 1 .2 1.2 1.2 1.4 2.3L5 8.1c.1 1.5.5 2.9 1.2 4.2.9 1.8.9 1.5 1.2 3.5l.5 4.3c1.4 1.2 2.9-.7 4.5-4.2.3-1.2.5-1.9.8-2.6.9-2.2 1.2-3.1 1-4.8-.2-1.6 0-2.9 0-4.6 0-.2-.1-.5 0-.6 2.2-4.2 4.9 6.6 3.5 12.1-.4 3.9-1.5 6.3-2.3 9.5l-.1 4.8-7-2.5-4 2z">
          </path>
        </svg>
        <svg id="t6-crown" viewBox="175 -32 20.5 390" class="width-height1" rel="3A">
          <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="261" fill="#FFFFFF"
           style="fill:#{(soapNoteForm.dentalMap['A-261'] ? '#fff000' : '' )}" 
           stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M2.8 3.1l-.4 1.1-.1 1.4C2.1 7.5 2 7.4 1.1 9c-.8 1.4-1 1.4-1 3 .1 1.8.1 2 1.3 3.4.6.8 1.2 1.3 1.6 1.4h2.9c1.1 1.6 2.4 2.7 4.3 1.1.5-.4.7-.7 1.6-1.8l1.7.7c1.3.5 2.1.7 3.3.6.6-.1 1.7-.7 2.2-1.8.4-.9.8-1.8 1.1-2.9.3-1 .3-1.5.1-2.5-.1-1-.4-2.3-.9-3.1l-.3-.8-.8-2.2c-.4-.9-1-1.3-1.7-1.7L12.3.9c-.6-.2-1.1-.8-1.7-.8-.8 0-1.6 0-2.3.5-1.3.9-1.9 1.2-2.7 1.5-.4.2-2.4 0-2.8 1z">
          </path>
          <path id="262" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-262'] ? '#fff000' : '' )}"
           stroke="#939598" stroke-width=".216" d="M5.9 16.8l2.5-1.1c.2-.1.6-.2.9-.5 2.3-1.8.2-4.8-.9-5.9">
          </path>
          <path id="263" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-263'] ? '#fff000' : '' )}"
           stroke="#939598" stroke-width=".216" d="M11.8 16c-1.1-1.3-2.1-4-1.3-5.6.6-1.2 1.1-2.6 2.4-3.5">
          </path>
        </svg>
      </svg>
      <svg id="t6-surface" viewBox="175 -60 22.7 390" class="width-height1"
      rel="3B">
        <path fill-rule="evenodd" clip-rule="evenodd" id="303" fill="#FFFFFF"
        style="fill:#{(soapNoteForm.dentalMap['A-303'] ? '#fff000' : '' )}" 
        stroke="#939598" stroke-width=".283" d="M1.7 12.9c-.1-.3-1-1.3-1.2-1.7-.3-.4-.6-6.4 0-7C2.8 1.8 5.2.7 5.9.4c1-.4 3.3-.4 4.7-.1 6.6 1.3 10.9 4 11.8 7.8.3 1.4.2 4.4-.1 6.7-.2 1.9-.9 3.2-1.9 4.6-.7 1.1-1.8 2.2-2.6 2.5-.7.3-2.4.3-3.4.3-.5-.1-2-1.6-2.4-1.6-.3-.1-1.6.5-2.4.8-.6.2-1.7.2-2.3 0-1-.2-2.6-1-3.8-2.3-1.3-1.5-2.1-3.6-2.1-4.2-.1-.4.3-1.6.3-2z">
        </path>
        <path id="304" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-304'] ? '#fff000' : '' )}"
         stroke="#939598" stroke-width=".216" d="M20.7 13.7c-.8 0-.9-.4-1.6-.5-.6-.1-1.2 0-1.7.1-.3.1-.6.6-.9.6-.3-.1-.3-.8-.9-1.1-.4-.2-.6-.8-1-.8s-1.3.6-1.7.6c-.4-.1-.9-.7-1.4-.8-.4 0-1.1-.3-1.4-.3-.4 0-1.3.5-1.9.6-.6 0-1.3-.1-1.7.1-.4.1-.7.5-1 .5-.4 0-.9 0-1.1-.1M17.7 6.7c.6-.4 1.3.6 1.4.9.3.6-.1 1.1-.3 1.4-.8 1-1.6 3-2 3-.3 0-1.7-1-2.3-1.7">
        </path>
        <path id="305" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-305'] ? '#fff000' : '' )}"
         stroke="#939598" stroke-width=".216" d="M15.6 5.9c-.7-.4-1.9.1-2 .3-.1.2-.7.8-.8 1.3-.1.6.2 1.2.3 1.4.2.3 1.2 1 1.4 1.4 0 .3-1.1 1-1.5 2.2 0 .5.7.5.6.9-.2.8-.8 1.7-1.2 1.8-.5.2-1.1 1.5-2 1.5M7.8 5.4c1-.7 2.1.9 2.5 1.8l.6 1.5c.5 1.2 0 2 .6 3M.2 8.6c.8.4 2 1.2 2.7 1.6.4.2.4 1.7 1.9 2.5-.3 0-.7 0-.9.1 0 1.9-.7 1.3-.8 1.8 0 .2-.1 1.4.1 1.5.2.1.4.2.7.1M3.7 4.9c.5 0 1 0 1.5.5.3.3.4 1 .4 1.4 0 .5.1 2-.2 2.7M11.7 20.7c1.2-.7 3-2.5 4.2-4.4.2-.4.4-.9.5-1.3 0-.4 0-.8.1-1.1">
        </path>
      </svg>
      <svg rel="3G">
        <svg id="t6-crown" viewBox="175 -32 20.5 390" class="width-height1" rel="3A">
          <g transform="rotate(180) translate(-20,-80)">
            <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="261" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-261'] ? '#fff000' : '' )}"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M2.8 3.1l-.4 1.1-.1 1.4C2.1 7.5 2 7.4 1.1 9c-.8 1.4-1 1.4-1 3 .1 1.8.1 2 1.3 3.4.6.8 1.2 1.3 1.6 1.4h2.9c1.1 1.6 2.4 2.7 4.3 1.1.5-.4.7-.7 1.6-1.8l1.7.7c1.3.5 2.1.7 3.3.6.6-.1 1.7-.7 2.2-1.8.4-.9.8-1.8 1.1-2.9.3-1 .3-1.5.1-2.5-.1-1-.4-2.3-.9-3.1l-.3-.8-.8-2.2c-.4-.9-1-1.3-1.7-1.7L12.3.9c-.6-.2-1.1-.8-1.7-.8-.8 0-1.6 0-2.3.5-1.3.9-1.9 1.2-2.7 1.5-.4.2-2.4 0-2.8 1z">
            </path>
            <path id="262" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-262'] ? '#fff000' : '' )}"
             stroke="#939598" stroke-width=".216" d="M5.9 16.8l2.5-1.1c.2-.1.6-.2.9-.5 2.3-1.8.2-4.8-.9-5.9">
            </path>
            <path id="263" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-263'] ? '#fff000' : '' )}"
              stroke="#939598" stroke-width=".216" d="M11.8 16c-1.1-1.3-2.1-4-1.3-5.6.6-1.2 1.1-2.6 2.4-3.5">
            </path>
          </g>    
        </svg>   
      </svg>
    </svg>
    <svg rel="30T">
      <g  transform = "translate(0,100)"> 
        <svg rel="30G">
          <svg viewBox="175 -155 17.9 390" id="b6-crown" class="width-height1" rel="30">
             <g transform="rotate(180) translate(-20,40)">
               <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="423" fill="#FFFFFF"
               style="fill:#{(soapNoteForm.dentalMap['A-423'] ? '#fff000' : '' )}" 
               stroke="#939598" stroke-width=".283" d="M.5 3.1c-.6 3.5-.3 6 .2 9.2.1.6.4 1.5.7 1.9 2.4 2.9 7.6 2 11.4 1.8 1.2-.1 3.3.4 3.6 0 1.3-1.4 3.4-4.4 3.8-5.4.8-1.6.8-4.5.4-5.7-.7-1.6-2.3-1.9-3.6-1.2-.2-.6-.8-2.5-2.4-2.9-2.8-.4-4.5 2.3-4.7 2.1C9.3 2.4 6.5.3 4.6.2 2.2-.2.8 1.8.5 3.1z">
               </path>
               <path id="424" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-424'] ? '#fff000' : '' )}"
               stroke="#939598" stroke-width=".216" d="M9.7 2.8c1.3.9 1 4 .7 5.9M17 3.7c.3.7.2 2.8-.3 4.2">
               </path>
             </g>   
          </svg>           
          <svg id="b6-surface" viewBox="175 -125 21.8 390" class="width-height1"
          rel="30B">
            <path fill-rule="evenodd" clip-rule="evenodd" id="365" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-365'] ? '#fff000' : '' )}" @click="drawBox($event,365);"
            stroke="#939598" stroke-width=".283" d="M19.8 7.5c-.2-.5.3-2.8 0-3.5-1.3-1.9-4-3.7-6.4-3.6-.5 0-1.5.8-1.9.8-.4 0-1.2-.6-1.6-.8C9 .1 6.7.1 6.1.3 5.1.7 2.9 2.2 1.9 4c-.4.5-.7 2.3-.7 3.2 0 .5-.8 1.8-.8 2.3-.2.6-.3 2-.1 2.7.3.7 1.7 1.6 2.5 2.2.4.3 1.1 1.4 1.5 2 2.1 2.2 3.9 1.6 4.4 1.8.9.4 2.1.9 4 .8 1.8.1 2.3-.5 2.7-.5 1.2-.5 2.6-.5 3.1-.7 1.7-.6 2.3-2.4 2.5-2.7.7-1 .7-4.2.5-5-.1-.6-1.5-2-1.7-2.6z">
            </path>
            <path id="366" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-366'] ? '#fff000' : '' )}"
             stroke="#939598" stroke-width=".216" d="M4.5 8c-.4.6-.5 1.3-.7 1.9.2.2.4.4.7.6 0 .3-.1.6-.1.9 0 .1 0 .3.1.4h1.1v.5h1.5c.5-.1 1-.1 1.5-.2.1-.1.4-.1.7-.1.4 0 .8 0 1.1.1.7.3 1.4.7 2.1 1 .2 0 .4.1.6.1.2-.1.4-.2.5-.3.4-.1.8-.1 1.3-.2.9-1 .6-1.8.1-3-.2-.3-.5-.6-1-.7 0-.6 0-1.2-.3-1.7-.3-.3-.8-.3-1.5-.3 0-.2 0-.5.1-.7-.2.1-.5.1-.7.2l-1.8-.3c-.6.3-1.1.5-1.7.8-.4 0-.8-.1-1.2-.1-.4.1-1.4 0-2.4 1.1z">
            </path>
            <path id="367" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-367'] ? '#fff000' : '' )}"
             stroke="#939598" stroke-width=".216" d="M3.8 9.9c0 .4.6.4.7.6 0 .5-.2 1.2 0 1.3.3.1.9-.1 1.1 0 .1.2-.2.4 0 .5.4.1 2.2 0 2.9-.2M1.2 6.5c.3.3.5.9.8 1 .5 0 .3-1.3.4-1.4.2-.1.6.1.8 0 .2-.1 0-.4.1-.5.2-.1 1.8-.1 2.1-.1.2 0 .4.4.3.7M6.9 9.5c-.3-.9-.4-2.3-.1-2.5.4-.3 1.1.1 1.4 0 .4-.2.9-.6 1.6-.8.8-.1 1.2.7 2.5.1 0 .4-.2.7-.2 1-.1.4-.2.8-.4 1.1-.4.3-.8.9-1 1.4-.2.6-.9 1.3-1.7 1.6">
            </path>
            <path id="368" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-368'] ? '#fff000' : '' )}"
             stroke="#939598" stroke-width=".216" d="M8.7 3.1c-.1.5-.1 1.2 0 1.3.2.1.3.1.4.2.3.2-.1.9.2 1.1l.5.5M14.1 3.5c-.1.3-.4.6-.6.7-.2 0-.2.7-.4 1.1-.1.2-.4.3-.5.4-.2.2-.3.5-.3.7M12.2 7c.4-.1.8-.1 1.2.1.4.1.6.7.5.9 0 .3-.1.8 0 1 .1.2.5.2.7.3.2.1.3.5.4.8M17.4 5.5c-.5.3-.6.9-1.2.9-.4 0-.9.4-.8.6.1.3.4 0 .8.3.3.3.5.6.7.8.4.3.4 1.1.8 1.3.3.2 0 .7.2 1 .2.2.4.2.5.4.1.2 0 1.5-.1 1.8-.1.2-.6.3-.5.5M11.7 8.4c.3.4.2 1.5.8 1.8.5.4.3.8 1.4 1.9.3.1 1 .4 1 .7 0 .2-.6 0-1 .1s-.5.4-.8.4c-.2 0-.8-.2-1.1-.4-.5-.3-1-.7-1.5-.8">
           </path>
          </svg>         
        </svg>
        <svg id="b6-crown" viewBox="175 -153 21 390" class="width-height1" rel="30A">
          <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="423" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-423'] ? '#fff000' : '' )}" 
          stroke="#939598" stroke-width=".283" d="M.5 3.1c-.6 3.5-.3 6 .2 9.2.1.6.4 1.5.7 1.9 2.4 2.9 7.6 2 11.4 1.8 1.2-.1 3.3.4 3.6 0 1.3-1.4 3.4-4.4 3.8-5.4.8-1.6.8-4.5.4-5.7-.7-1.6-2.3-1.9-3.6-1.2-.2-.6-.8-2.5-2.4-2.9-2.8-.4-4.5 2.3-4.7 2.1C9.3 2.4 6.5.3 4.6.2 2.2-.2.8 1.8.5 3.1z">
          </path>
          <path id="424" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-424'] ? '#fff000' : '' )}"
           stroke="#939598" stroke-width=".216" d="M9.7 2.8c1.3.9 1 4 .7 5.9M17 3.7c.3.7.2 2.8-.3 4.2">
          </path>
        </svg>
        <svg viewBox="175 -163 17.9 390" id="b6-root" class="width-height1" rel="30">
          <path rel="CR1" fill-rule="evenodd" clip-rule="evenodd" fill="#F2ECBE"
          stroke="#939598" stroke-width=".283" stroke-miterlimit="22.926" d="M14.5.1l3 2.6c.5 2.7 0 6.4-.1 7.7-.2 1.7-.6 3.4-.6 5-.5 8.1-1 10.6-2.1 10.9-1.2.6-2.1-1.8-2.4-2.8-.4-1.1-.8-4.3-.9-5.7-.4-4.8-.4-8.8-.9-9C8.9 8 8 10.6 6.9 13.5c-.7 1.9-1 3.8-1 5.3 0 .6-.1 4.9-.5 6.1C3.8 29.3.9 23.8.3 17.7-.1 14.3.2 7.4 1 4.3 1.3 3 2.1 1.8 2.7.5L14.5.1z">
          </path>
        </svg>   
      </g>  
    </svg>
    <svg rel="4T"  @click="drawBox($event,'4T')">
      <svg rel="4G">
        <svg viewBox="147 -10 8.8 390" id="t5-root" class="width-height1" rel="4">
          <path rel="CR1" fill-rule="evenodd" clip-rule="evenodd" fill="#F2ECBE"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M.6 29.8c-.7-9.4-1-19.3 2.3-28.1C4.3-1 6.8.3 6.8 1.7c.2 4.9-.1 9.2.6 14 .1 1.1 1.1 2.1 1.2 3.7.4 4-.6 7.2-.7 10.6L4 31.7.6 29.8z">
          </path>
        </svg>
        <svg id="t5-crown" viewBox="147 -32 15.5 390" class="width-height1" rel="4A">
          <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="264" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-264'] ? '#fff000' : '' )}" 
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M4.1.6C5.3.2 6.2.2 7.6.2c1.7 0 2.8 0 3.9.5 1.4 2.6 3.1 5.1 3.6 8 .5 1.9.7 3.6-.4 5.2-1.6 1.5-3.3 2.5-5.5 3.4-.6.3-2 .3-2.6-.1-3.1-2.2-4.8-3.8-6-5.5-.1-.2-.2-.6-.2-.9C0 9 .2 7.4 1.4 5.6c.2-.2.3-.3.4-.3C2.9 3.4 3.1 1.7 4.1.6zM5.7 9c-.8-1.5-2-2.8-3.8-3.7">
          </path>
        </svg>
        <svg id="t5-crown" viewBox="147 -32 15.5 390" class="width-height1" rel="4A">
          <g transform="rotate(180) translate(-15,-78)">        
            <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="264" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-264'] ? '#fff000' : '' )}" 
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M4.1.6C5.3.2 6.2.2 7.6.2c1.7 0 2.8 0 3.9.5 1.4 2.6 3.1 5.1 3.6 8 .5 1.9.7 3.6-.4 5.2-1.6 1.5-3.3 2.5-5.5 3.4-.6.3-2 .3-2.6-.1-3.1-2.2-4.8-3.8-6-5.5-.1-.2-.2-.6-.2-.9C0 9 .2 7.4 1.4 5.6c.2-.2.3-.3.4-.3C2.9 3.4 3.1 1.7 4.1.6zM5.7 9c-.8-1.5-2-2.8-3.8-3.7">
            </path>
          </g>  
        </svg>        
      </svg>
      <svg id="t5-surface" viewBox="147 -62 16.4 390" class="width-height1"
      rel="4B">
        <path fill-rule="evenodd" clip-rule="evenodd" id="306" fill="#FFFFFF"
        style="fill:#{(soapNoteForm.dentalMap['A-306'] ? '#fff000' : '' )}" 
        stroke="#939598" stroke-width=".283" d="M.7 10.4c0-.2-.2-.7-.3-1.1-.4-1.6 0-3.3 0-5 .4-1 2.7-3.7 5.1-4C7.6-.2 8.6.2 8.9.3c.6.2 1.6.1 2.1.3.6.1 1.5.3 1.9.6.6.4 2.6 1.8 3.2 4.1.3 1 .3 1.8 0 2.7-.3.9-.9 1.7-1.5 2 .2.5.1 2.2 0 2.7-.3 1.3-1 2.5-1.5 3.1-1.1 1.4-3 1.9-3.9 2.1-1.2.3-2.9.2-3.7.1-2.7-.8-5-3.1-5.2-4.2-.1-.5-.2-1.9 0-2.9.1-.1.3-.2.4-.5z">
        </path>
        <path id="307" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-307'] ? '#fff000' : '' )}"
         stroke="#939598" stroke-width=".216" d="M3.2 4.6c.6-.8 1.4-.7 1.9-1.1.8-.7 1.3-.5 1.9-.4.9.7 1.2 2.3 1.9 2.4 1.1 0 1.6-1.2 2.4-1.1.9.3 1.5.5 2.1.9 0 .4-.5.6-.5 1.9-.1.8-.5.9-.9 1.3.1.2.5.5.6.8.1.6-.4 1.6-1.1 1.2-.5-.3-.9-.6-1.4-.9-.3-.1-.6-.2-.9.3-.9.5-1.7.2-2.5 0l-1.2-.6c-.2.2-.5.5-.8.7-.3-.1-.8-.2-1.2-.3V7.8c.2-.3.5-.5.7-.7-.3-.2-.7-.4-1-.6-.3-.8-.1-1.3 0-1.9z">
        </path>
        <path id="308" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-308'] ? '#fff000' : '' )}"
         stroke="#939598" stroke-width=".216" d="M.7 10.4c.4-.4 1-.2 1.2-.3.5-.3.9-.5 1.5-.5.4 0 .9.4 1.3.4s.4-.7.8-.7c.5 0 .8.6 1.2.6.5.1 1.8.3 2.3.2.3 0 .3-.4.6-.5.3-.1.7.1 1-.1.7-.4 1.4-1 1.9-.9.4 0 1.5 1.4 2.2 1.5">
        </path>
        <path id="309" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-309'] ? '#fff000' : '' )}"
         stroke="#939598" stroke-width=".216" d="M9.5 13.2c.3-.3.4-.8.4-1.3 0-.8-.5-1.4-.9-1.8M10 9.6c.7.3 1.2.7 1.7 1.2M9.8 7.3c.5.1 1 .2 1.5 0 .2-.1 0-.8.2-.9.1-.1.4-.2.4-.4 0-.3 0-1.1-.1-1.2-.2-.2-.8-.5-.6-.5.1-.1 2.1.6 2.2.9.1.4-.5.7-.5 1.1 0 .7-.1 1.4-.4 1.6-.5.2-.7.6-.5.9M4.5 8.2c.8.1.8 1.2.9 1.1.1-.2.7.1 1.3.6-.3.4-.7.7-1.1 1-.3.3-.6 1.5-.6 2M3.5 9.7c-.2-.5-.1-1.3 0-1.9.1-.4.6-.3.7-.6.1-.3-.8-.5-1-.6-.3-.3-.2-1.3 0-2M6.8 6.9C6.3 6.6 5.5 5.5 5.4 5c.3-.9-.4-1.3-.3-1.5 0-.2.4-.4.6-.5.3-.1 1-.1 1.3.1.8.6 1.2 2.1 1.5 2.3.1 0 .5.1.8 0">
        </path>
      </svg>
    </svg>
    <svg rel="29T" @click="drawBox($event,'29T')">
      <g  transform = "translate(0,100)"> 
        <svg rel="29G">
          <svg id="b5-crown" viewBox="147 -155 9.3 390" class="width-height1" rel="29">
             <g transform="rotate(180) translate(-12,40)">     
                <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="425" fill="#FFFFFF"
                style="fill:#{(soapNoteForm.dentalMap['A-425'] ? '#fff000' : '' )}" 
                stroke="#939598" stroke-width=".283" d="M.7 5.4c.3-2.8 3-2.9 4-3 .9-.5 1.6-1.2 2.5-2C8.2 0 8.9 0 9.6.3c1.9.7 2.7 2.3 3.4 2.6 1.5.2 3 .5 3.8 1.7.6.9.3 2.8-.7 4.4-2.4 3-3.5 7-4.1 8.1-2.2 1.5-5.2 1.9-7.6-.3-.5-1.2-.8-3-1.3-4.6-.9-2-2.1-3.4-2.4-4.3-.2-.8-.2-1.6 0-2.5z">
                </path>
                <path id="426" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-426'] ? '#fff000' : '' )}"
                stroke="#939598" stroke-width=".216" d="M5.8 7.5c.5-1.6.2-5-1.1-5M11.2 7.3c-.1-1.5.5-4.2 1.8-4.4">
                </path>
             </g>
          </svg>           
          <svg id="b5-surface" viewBox="148 -126 16.8 390" class="width-height1"
          rel="29B">
            <path fill-rule="evenodd" clip-rule="evenodd" id="369" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-32'] ? '#fff000' : '' )}" 
            stroke="#939598" stroke-width=".283" d="M1.5 4.9c-.1-.8 0-1.6.1-2.3.2-.7.9-1.9 1.8-2.2C4.8 0 6.1.2 6.8.4c.5.2 1.1.9 1.5.9.4 0 .9-.5 1.5-.8.4-.2 1.9-.2 2.3 0 1.2.4 2.7 1.9 3.4 2.9.3.4.8 1.6 1 2.5.3 1.3.2 4.9-.3 6.1-.8 1.8-4.1 3.3-5.2 3.8-1.2.6-3.6.5-4.4.3-1.8-.4-4.5-2.4-5.2-3.5-.6-.9-.1-1.9-.3-2.3-.2-.3-.5-.7-.7-1C0 8.1.1 6.9.4 6.4c.4-.6 1-1 1.1-1.5z">
            </path>
            <path id="370" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-370'] ? '#fff000' : '' )}"
             stroke="#939598" stroke-width=".216" d="M5.5 4.1c.7.3 1.3.2 1.7-.2.1-.5.1-1 .2-1.5 0-.1.1-.2.2-.3.1.2.2.3.2.5.1.4.2.8.3 1.1 0 .3.2.4.4.3.5.2.8 0 1-.3.2-.2.2-.1.4-.3 1.2-.1-.4 1 .2 1.3.4.1.8.2 1.3.3.5.1.9.2 1.4.1.5-.3 1.1-.4 1.5-.4 0 .3 0 .6-.1.8-.1.8-.5 1-1 1.2.4.4.7.8.8 1.3.1.6.1 1.1 0 1.7-.2.6-.5 1-.9 1.1-.6.2-1.1.6-2.1.7-1 0-1.8-.9-2.3-.5-.5.8-1 1.2-1.4 1-.4-.1-.6-.3-.6-.7 0-.4-.2-.6-.9-.7-.3-.1-.5-.2-.8-.2-.1-.3-.3-.7-.4-1 0-.6.5-.9 1-1 0-.7-1.5-1.1-1.3-1.9-.6-.7-.8-1.6-.1-3 .2-.1.4-.3.6-.4.4.3.6.6.7 1z">
            </path>
            <path id="371" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-371'] ? '#fff000' : '' )}"
             stroke="#939598" stroke-width=".216" d="M5.5 4.1c0-.4-.5-.9-.8-1-.2-.1-.7.7-1.1.9-.7.5-1.4.4-2 .9M1.1 10.3c.7-.5 1.5-1.4 2.2-2.2.4-.3.7-1.5.9-1.6.3-.2 1.1.4 1.6.6.4.1 1 0 1.5-.3.5-.2 1.2-.6 1.5-.6.3 0 .7.8 1.1 1 .3.1 1.6-.2 2.3-.2.6 0 1.4-.4 1.6-.6.3-.3.4-1.3.4-1.6-.1-.2-1.3.4-1.9.4-.6 0-1.6-.3-2.4-.5M12.8 11c.8 0 1.1-1.1 1.2-1.6.1-.5.1-1-.1-1.5s-.3-.7-.7-1.1">
            </path>
            <path id="372" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-372'] ? '#fff000' : '' )}"
             stroke="#939598" stroke-width=".216" d="M11.3 9.6c.1-.2 0-.6-.1-.9-.1-.4-1.1-1.4-1.3-1.4-.1 0-.7.9-.8 1.6M5.5 8.5c-.3 0-1 .5-1 .8 0 .3.4 1.2.6 1.3.2.1 1.3.1 1.4.3.2.2.3.8.4 1 .1.1.6.3.8.2.2-.1.7-1 1.1-1.1M7.2 3.9c0-.6.2-1.7.4-1.8.2.1.5 1.9.6 1.9.2.1.8.1.9 0 .2 0 .5-.5.8-.6">
            </path>
          </svg>     
        </svg>
        <svg id="b5-crown" viewBox="147 -152 17.2 390" class="width-height1" rel="29A">
          <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="425" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-425'] ? '#fff000' : '' )}" 
          stroke="#939598" stroke-width=".283" d="M.7 5.4c.3-2.8 3-2.9 4-3 .9-.5 1.6-1.2 2.5-2C8.2 0 8.9 0 9.6.3c1.9.7 2.7 2.3 3.4 2.6 1.5.2 3 .5 3.8 1.7.6.9.3 2.8-.7 4.4-2.4 3-3.5 7-4.1 8.1-2.2 1.5-5.2 1.9-7.6-.3-.5-1.2-.8-3-1.3-4.6-.9-2-2.1-3.4-2.4-4.3-.2-.8-.2-1.6 0-2.5z">
          </path>
          <path id="426" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-426'] ? '#fff000' : '' )}"
           stroke="#939598" stroke-width=".216" d="M5.8 7.5c.5-1.6.2-5-1.1-5M11.2 7.3c-.1-1.5.5-4.2 1.8-4.4">
          </path>
        </svg>
        <svg id="b5-root" viewBox="147 -165 9.3 390" class="width-height1" rel="29">
          <path rel="CR1" fill-rule="evenodd" clip-rule="evenodd" fill="#F2ECBE"
          stroke="#939598" stroke-width=".283" stroke-miterlimit="22.926" d="M1 .1c-1.5 6.7-1 15.2.5 20.8C4.8 33.4 7.1 31 7.2 24.2c0-1.2-.2-2.4-.2-3.9.3-3.9 3.5-6.4 1.6-19.9L5 .5 1 .1z">
          </path>
        </svg>      
      </g>  
    </svg>
    <svg rel="5T" @click="drawBox($event,'5T')">
      <svg rel="5G">
        <svg viewBox="124 -10 10.1 390" id="t4-root" class="width-height1" rel="5">
          <path rel="CR1" fill-rule="evenodd" clip-rule="evenodd" fill="#F2ECBE"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M9.5 29.1C11.2 15.9 8.2 9.8 7 2.1 6.6-.4 3.7-1.2 2.6 3.7 1.1 9.9 1 14.7.6 19.6c-.7 4.9-.8 7 .7 9.7l4 2.7 4.2-2.9z">
          </path>
        </svg>
        <svg id="t4-crown" viewBox="124 -32 16.7 390" class="width-height1" rel="5A">
          <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="265" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-265'] ? '#fff000' : '' )}" 
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M.6 9.2c1-2.8 1.7-4.7 3.7-7.2 2.2-2.6 6.9-2 8.6-.5 2 2.1 2.9 4.7 3.6 7.7.6 4.8-1.3 7.1-3.5 8.2-.9-.1-1.3-.2-1.9-.9-.5 1-1.5 1.5-2.4 1.6-3.6-1.3-5.7-3.1-8-5.5-.8-1.1-.7-2.3-.1-3.4z">
          </path>
        </svg>
        <svg id="t4-crown" viewBox="124 -32 16.7 390" class="width-height1" rel="5A">
            <g transform="rotate(180) translate(-17,-78)">
              <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="265" fill="#FFFFFF"
              style="fill:#{(soapNoteForm.dentalMap['A-265'] ? '#fff000' : '' )}" 
              stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M.6 9.2c1-2.8 1.7-4.7 3.7-7.2 2.2-2.6 6.9-2 8.6-.5 2 2.1 2.9 4.7 3.6 7.7.6 4.8-1.3 7.1-3.5 8.2-.9-.1-1.3-.2-1.9-.9-.5 1-1.5 1.5-2.4 1.6-3.6-1.3-5.7-3.1-8-5.5-.8-1.1-.7-2.3-.1-3.4z">
              </path>
            </g>   
        </svg>        
      </svg>
      <svg id="t4-surface" viewBox="124 -60 17.1 390" class="width-height1"
      rel="5B">
        <path fill-rule="evenodd" clip-rule="evenodd" id="310" fill="#FFFFFF"
        style="fill:#{(soapNoteForm.dentalMap['A-310'] ? '#fff000' : '' )}" 
        stroke="#939598" stroke-width=".283" d="M2.2 12.2C2.2 12.1.7 10.5.3 9 .1 8.3 0 7.3.4 6.1 1.8 2.6 5 1.4 7.7.4c.8-.4 1.7-.4 2.4.1 2.8 1 5.7 1.8 6.5 4.9.4 1.2.4 2.6.2 3.7-.1 1.5-.7 2.7-1.4 3.8-.3.4-.2 1.5-.4 2.2-.5 1.4-1.8 4-5.8 5.2-.9.2-2.3.3-3.2 0-.5-.2-3.1-.8-4.2-3.8-.2-.6-.4-3-.1-3.5.1-.4.6-.4.5-.8z">
        </path>
        <path id="311" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-311'] ? '#fff000' : '' )}"
         stroke="#939598" stroke-width=".216" d="M2.2 12.4c.4-.4.8-.9 1.5-.9.5 0 1.3 1.2 1.9 1.2.5 0 .8-.9 1.5-1.2 0-.1 2 .2 2.9-.3.4-.1.9.3 1.2.2.5-.1.9-.4 1.3-.3 1.1.4 1.9 1.5 2.9 1.8">
        </path>
        <path id="312" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-312'] ? '#fff000' : '' )}"
         stroke="#939598" stroke-width=".216" d="M2.6 6.8c.9-.1 1.7 1.7 2 2.1.2.4.1 2.1-.5 2.7M4.5 5.8c-.1-.7.6-1.1 1.1-1.3.7-.2 1.3-.2 1.9 0 .4.3.7.7.8 1.3C8.4 6.9 8 8 7.8 8c-.4 0-1-1.1-1.3-1-.3.1-.2 3.4-.1 3.7.1.3.5.5.6.8M11.4 4.6c-.2 0-.7.2-.7.4-.1.9.1 2.2.2 2.4.1.2.7 2.2 1 2.2.3 0 1.5-1.6 2-2.8.1-.3.4-.3.6-.2M9.3 9c-.1.5-.1 1.3 0 1.6.1.1.6.5 1 .7M10.4 14.6c.3-.1.7-.5.9-1 .3-.8.1-1.4-.1-2M5.4 12.7c.3.2.2.8 0 1.3-.3.2-.4.6-.4.7 0 .2.5.4.6.7">
        </path>
      </svg>
    </svg>
    <svg rel="28T" @click="drawBox($event,'28T')">
      <g  transform = "translate(0,100)"> 
        <svg id="b4-crown" viewBox="124 -155 8.8 390" class="width-height1" rel="28">
          <g transform="rotate(180) translate(-12,40)">
             <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="427" fill="#FFFFFF"
             style="fill:#{(soapNoteForm.dentalMap['A-427'] ? '#fff000' : '' )}" 
             stroke="#939598" stroke-width=".283" d="M3.5 16.6c.2.4 2.7 1.2 7.6 1.2.1 0 .3-.2.4-.3.9-2.8 1-4.6 3.6-8.4.5-1 .8-3.3.1-4.1-1.3-1.1-3.2-2.6-4.8-3.4-.4-.2-1-.7-1.3-1C8.7.1 7.5 0 6.8.5 4.5 1.9 1.8.9.7 2.2-.3 3.5.1 5.7.5 7.6c.4 2.1 2.1 6.2 3 9z">
             </path>          
          </g>
        </svg>  
        <svg rel="28G">
          <svg id="b4-surface" viewBox="124 -125 16.9 390" class="width-height1"
          rel="28B">
            <path fill-rule="evenodd" clip-rule="evenodd" id="373" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-373'] ? '#fff000' : '' )}" 
            stroke="#939598" stroke-width=".283" d="M.6 7.1c.9-1.5 2-3.4 2.8-4.1.7-.6 2.5-1.7 3.9-2.3C8.9 0 10-.1 11.4.6c.9.4 2.1 1.1 2.7 1.9.6.6 2.4 3.8 2.6 4.7.3 1.8-.3 2.9-.5 3.7-1 3.1-4.3 5.4-5.6 6-.9.4-2.6.5-3.4.1-3.1-1.6-5.3-3.3-6.9-7.1-.4-1-.1-2.1.3-2.8z">
            </path>
            <path id="374" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-374'] ? '#fff000' : '' )}"
              stroke="#939598" stroke-width=".216" d="M3.5 8.4c.1-.6.3-1 .6-1.2C4.8 7 5.3 7 6 6.4c.5-.8-.2-1.8.5-1.7.7.6 1 1.3 1.3 2.1-.1 1.6-.5 2.4-1 3.1-.6.4-1.1.4-1.8.2-.4-.1-.8-.2-1.3-.3-.4 0-.4-.5-.2-1.4z">
            </path>
            <path id="375" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-375'] ? '#fff000' : '' )}"
             stroke="#939598" stroke-width=".216" d="M9.8 8.7c.1-.6.2-1.2.2-1.8-.2-1.9.1-2.2.4-2.5.3-.2.5-.5.8-.7.9-.4.6 1.6 1 2 1.3.7 1.8 1.8 2 3.1-.1 1.1-.7 1.3-1.6 1-.7.1-1.5.3-2.4.6-.1-.5-.3-1.1-.4-1.7z">
            </path>
            <path id="376" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-376'] ? '#fff000' : '' )}"
              stroke="#939598" stroke-width=".216" d="M6.5 4.7c.5.4 1 1.1 1.3 2.1.1.8-.3 2.6-1 3.1M4.1 7.2c-.2.2-.5.7-.6 1.2 0 .3-.2.9-.1 1.2.1.2 1 .5 1.6.5M11.2 3.7c-.6.4-1.1 1-1.3 1.6-.1.5.3 1.8 0 2.4-.3.5 0 2.6.3 2.7.3.1 1.4-.8 2.4-.6M12.2 5.7c1.5.8 1.8 1.9 2 3.2">
            </path>
          </svg>
        </svg>
        <svg id="b4-crown" viewBox="124 -152 15.7 390" class="width-height1" rel="28A">
          <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="427" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-427'] ? '#fff000' : '' )}" 
          stroke="#939598" stroke-width=".283" d="M3.5 16.6c.2.4 2.7 1.2 7.6 1.2.1 0 .3-.2.4-.3.9-2.8 1-4.6 3.6-8.4.5-1 .8-3.3.1-4.1-1.3-1.1-3.2-2.6-4.8-3.4-.4-.2-1-.7-1.3-1C8.7.1 7.5 0 6.8.5 4.5 1.9 1.8.9.7 2.2-.3 3.5.1 5.7.5 7.6c.4 2.1 2.1 6.2 3 9z">
          </path>
        </svg>
        <svg id="b4-root" viewBox="124 -167 8.8 390" class="width-height1" rel="28">
          <path rel="CR1" fill-rule="evenodd" clip-rule="evenodd" fill="#F2ECBE"
          stroke="#939598" stroke-width=".283" stroke-miterlimit="22.926" d="M1 .1c-1.5 6.7-1 15.2.5 20.8C4.8 33.4 7.1 31 7.2 24.2c0-1.2-.2-2.4-.2-3.9.3-3.9 3.5-6.4 1.6-19.9L5 .5 1 .1z">
          </path>
        </svg>
      </g>  
    </svg>
    <svg rel="6T">
      <svg rel="6G">
        <svg id="t3-root" viewBox="117 -10 10.3 479" class="width-height1" rel="6">
          <path rel="CR1" fill-rule="evenodd" clip-rule="evenodd" fill="#F2ECBE"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M.3 38.3c-.3-9.7-.5-26.9 3.8-36 1.3-2.7 4.3-3.2 4.3.2.2 4.9-.6 8.6-.4 13.9-.4 2.8 2.1 9.5 2.1 12.6.1 4.2.1 6-1.4 9.4l-4.3 1.2-4.1-1.3z">
          </path>
        </svg>
        <svg id="t3-crown" viewBox="117 -39 17.4 479" class="width-height1" rel="6A">
          <path rel="CR2" id="269" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-269'] ? '#fff000' : '' )}"
          @click="drawBox($event,269);" stroke="#939598" stroke-width=".216" d="M4.5 2.2c.2-.5.5-1 .9-1.2C6.5.4 7.6 0 9.1.1c1.7 0 3.7.9 4.1 2 .2.4 2.4 5.6 3.8 8.2 1.3 4.6-.9 9.1-4.6 10-.6 0-.6-.8-.8-.7 0 0-1 1.5-2.6 2-1.5.2-2.1-.5-3-1-6.3-3.8-7.5-6.5-2.8-13 .9-1.9.8-3 1.3-5.4z">
          </path>
          <path id="270" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-270'] ? '#fff000' : '' )}"
          @click="drawBox($event,270);" stroke="#939598" stroke-width=".216" d="M11.6 9.4c-1.1 2.9-1.4 5.9-1 9.5">
          </path>
        </svg>
        <svg id="t3-crown" viewBox="117 -34 17.4 479" class="width-height1" rel="6A">
          <g transform="rotate(180) translate(-18,-100)">        
             <path rel="CR2" id="269" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-269'] ? '#fff000' : '' )}"
             @click="drawBox($event,269);" stroke="#939598" stroke-width=".216" d="M4.5 2.2c.2-.5.5-1 .9-1.2C6.5.4 7.6 0 9.1.1c1.7 0 3.7.9 4.1 2 .2.4 2.4 5.6 3.8 8.2 1.3 4.6-.9 9.1-4.6 10-.6 0-.6-.8-.8-.7 0 0-1 1.5-2.6 2-1.5.2-2.1-.5-3-1-6.3-3.8-7.5-6.5-2.8-13 .9-1.9.8-3 1.3-5.4z">
             </path>
             <path id="270" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-270'] ? '#fff000' : '' )}"
             @click="drawBox($event,270);" stroke="#939598" stroke-width=".216" d="M11.6 9.4c-1.1 2.9-1.4 5.9-1 9.5">
             </path>
          </g>    
        </svg>        
      </svg>
      <svg id="t3-surface" viewBox="117 -78 19.2 479" class="width-height1"
      rel="6B">
        <path fill-rule="evenodd" clip-rule="evenodd" id="313" fill="#FFFFFF"
        style="fill:#{(soapNoteForm.dentalMap['A-32'] ? '#fff000' : '' )}" @click="drawBox($event,313);"
        stroke="#939598" stroke-width=".283" d="M.7 4.6c-.5.7-.9 1.5-.2 3.5 1.9 4.8 5.6 8.7 8.3 9.3.9.4 2 .4 2.8 0 3.1-1.4 5.2-4.1 7-7.1.6-1.4.6-2.7.1-3.6C17.4 4 14.2 1.4 12.2.6 10.9 0 8.8.2 7.6.6c-2.7.7-5.9 2.5-6.9 4z">
        </path>
        <path id="314" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-314'] ? '#fff000' : '' )}"
        @click="drawBox($event,314);" stroke="#939598" stroke-width=".216" d="M6.3 6.7C6 7.1 6 7.8 6 8.3c.1.5.4 1 .7 1.3.6.6.6 1.4.6 2.2.3-.1.6-.1.9-.2.4-.2.7-.4 1.1-.5.4 0 1 .1 1.1 0 0-.1 1 .2 1 .5.1.3.2 1.3 0 1.8-.1.5.3.5 1.1.1.6-.4.9-1 1.2-1.7.3-.3.4-.7.3-1.1 0-.4.1-.8.1-1.2.1-.6 0-1.2-.5-1.7-.4-.2-.7-.4-1.2-.4-.3.1-.6.3-.8.6-.7.8-2 2.5-3.1 1.8.1-.5.2-1.1.2-1.6 0-.6-.3-.9-.7-1.2-.5-.3-1.1-.3-1.7-.3z">
        </path>
        <path id="315" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-315'] ? '#fff000' : '' )}"
        @click="drawBox($event,315);" stroke="#939598" stroke-width=".216" d="M1.9 5.8c-.3.7.5 1.4.6 1.7.6 2.3 3 4 3.3 4.1.4.2 1.7.3 2.4 0 .2-.1.5-.4.7-.5.4-.2 1.7-.2 2.1 0 .3.2.6.6.6.9-.1.6-.3 1.6 0 1.7.5.1.9-.3 1.3-.7.4-.4.6-1.3.9-1.5.3-.4.2-.8.6-.9.5-.1 1.1-.3 1.6-.6s.8-.2 1.2 0">
        </path>
        <path id="316" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-316'] ? '#fff000' : '' )}"
        @click="drawBox($event,316);" stroke="#939598" stroke-width=".216" d="M11.6 7.9c.1-.4.5-.6 1-.6.4 0 1 .3 1.3.8.2.4.2.9.2 1.4-.1.7-.2 1.4 0 1.7M6.7 9.6c.6.4.5 1.4.6 2.2h.5c.2.9-.2 2.8.1 3.1 0 .1.2.3.4.3.1.1.1.3 0 .5M6.3 6.7c1.5-.1 2.3.5 2.5 1.4 0 .7-.4 1.6-.1 2 .2.3.6.6.7 1">
        </path>
      </svg>
    </svg>
    <svg rel="27T">
      <g  transform = "translate(0,100)"> 
        <svg id="b3-crown" viewBox="124 -155 8.8 390" class="width-height1" rel="27">
          <g transform="rotate(180) translate(-42,37)">    
             <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="428" fill="#FFFFFF"
             style="fill:#{(soapNoteForm.dentalMap['A-428'] ? '#fff000' : '' )}" @click="drawBox($event,428);"
             stroke="#939598" stroke-width=".283" d="M.8 4.7C1.5 3.6 5.9.2 7.7.2c1.9 0 5.4 3.3 7.3 5.9 2.4 3.8-.3 5.8-2 9.2-.5 1 0 4.8-1.3 6.3-1.4 1-5.8 1.5-7.9-.2-.5-1.2-.5-2.4-.6-3.7-.1-2.5-4.7-10.9-2.4-13z">
             </path>          
          </g>
        </svg>     
        <svg rel="27G">
          <svg id="b3-surface" viewBox="95 -124 15.5 390" class="width-height1"
          rel="27B">
            <path fill-rule="evenodd" clip-rule="evenodd" id="377" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-377'] ? '#fff000' : '' )}" @click="drawBox($event,377);"
            stroke="#939598" stroke-width=".283" d="M.6 6.1C1 5.5 4.4 1.9 6.2.5c1-.6 2.4-.4 3.2 0 1.6.9 2.7 1.6 3.8 3 .7.8 1.5 2.3 1.8 3.5.6 1.4.4 2.9.1 4.2-.5 1.4-2.2 4.7-3.3 5.1-.9.3-4.2.2-5 0-.4-.1-2.6-1.9-3.4-2.6-1.1-1.2-2-2.7-2.9-4.2-.4-.8-.5-2.3.1-3.4z">
            </path>
            <path id="378" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-378'] ? '#fff000' : '' )}"
            @click="drawBox($event,378);" stroke="#939598" stroke-width=".216" d="M3.4 6.9c.1-.6.4-.8.7-1 .7-.2.7-.5 1.4-1 .4-2.3.2-2.1 2.1-3.4.7.6.2 3.4.2 4.3.2 2.8-.6 3.5-1.4 3.4-.6.4-1.9-.3-2.6-.6-.3-.5-.7-.8-.4-1.7z">
            </path>
            <path id="379" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-379'] ? '#fff000' : '' )}"
            @click="drawBox($event,379);" stroke="#939598" stroke-width=".216" d="M9.7 4.9c-.4.4.2 1.1.3 1.3.2.4.4 1.1.1 1.5-.2.2-.7 0-.7.4 0 .5.1.8.2 1 .7.3 1.6.5 2.3-.1.4-.4.3-.8.5-1.1.3-.6.9-.3 1.1-1-.1-.7-.4-1.1-.9-1.8-.1-.1-.2-.4-.5-.6-.2-.4-1.9-.4-2.4.4z">
            </path>
            <path id="380" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-380'] ? '#fff000' : '' )}"
            @click="drawBox($event,380);" stroke="#939598" stroke-width=".216" d="M5.4 4.9c.3-.5.1-1.6.5-2 .3-.4 1.3-1.4 1.6-1.4.5.1.1 4.1.2 6.2M10.4 4.4c.6-.1 1.5-.1 1.7 0 .2.1.9 1.1 1 1.3.1.3.5 1 .4 1.2-.1.2-.4.3-.6.4-.2.1-.4.3-.5.5M10.1 6.1c.1.5.1 1.3 0 1.6-.2.2-.5 0-.6.2-.1.1 0 .9.1 1.1.1.2.5.2.8.2M3.4 7c0 .3-.1.9.1 1.2.3.5 1.1.8 1.3.9.3.1 1 .1 1.5.1">
            </path>
          </svg>
        </svg>
        <svg id="b3-crown" viewBox="117 -185 16.1 479" class="width-height1" rel="27A">
          <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="428" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-428'] ? '#fff000' : '' )}" @click="drawBox($event,428);"
          stroke="#939598" stroke-width=".283" d="M.8 4.7C1.5 3.6 5.9.2 7.7.2c1.9 0 5.4 3.3 7.3 5.9 2.4 3.8-.3 5.8-2 9.2-.5 1 0 4.8-1.3 6.3-1.4 1-5.8 1.5-7.9-.2-.5-1.2-.5-2.4-.6-3.7-.1-2.5-4.7-10.9-2.4-13z">
          </path>
        </svg>
        <svg id="b3-root" viewBox="117 -202 9.8 479" class="width-height1" rel="27">
          <path rel="CR1" fill-rule="evenodd" clip-rule="evenodd" fill="#F2ECBE"
          stroke="#939598" stroke-width=".283" stroke-miterlimit="22.926" d="M1.2 1.3c-2.3 2.9-1 30.4 3.3 29.8.6-.1 4.1-.6 4.5-8.2.3-4.8 1.4-17.5-.6-21.1L5.3.1 1.2 1.3z">
          </path>
        </svg>
      </g>  
    </svg>
    <svg rel="7T">
      <svg rel="7G">
        <svg id="t2-root" viewBox="70 -10 9.8 390" class="width-height1" rel="7">
          <path rel="CR1" fill-rule="evenodd" clip-rule="evenodd" fill="#F2ECBE"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M8.5 30.3c.3-.5.5-1.4.8-2.2 1.2-3.1-1-13.6-.3-23.3 0-.6.2-1.5.2-2.2C9-.4 6.5-1.5 4.7 4c-.9 2-1.2 4.7-1.4 7.1-.4 6.3-4 14.7-3.1 17.8.1.5.3 1.4.7 1.5l4.5 2.2 3.1-2.3z">
          </path>
          <path class="exst1" d="M.3 41.7c0 1.4-.3 2.6-.8 4.1M6.4 43.5c.1.6 0 1.5-.2 2">
          </path>
        </svg>
        <svg id="t2-crown" viewBox="70 -30 15 390" class="width-height1" rel="7A">
          <path rel="CR2" id="274" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-274'] ? '#fff000' : '' )}"
          @click="drawBox($event,274);" stroke="#939598" stroke-width=".216" d="M4.3 2.1c.1-.5.5-1.1.8-1.2 2.7-1 4.4-.9 6.8 0 .4.1 1.1 2 1.3 2.3 2 4.7 2.7 11.4-.7 13.6-.4.4-1.9.8-2.5.1-.5 1-2.6 1-3.6 1.1-1.6-.1-2.3-.3-3.2-.9-1.7.1-3.3.1-3.1-2.3C1.8 9 2.9 7.3 4.3 2.1z">
          </path>
        </svg>
        <svg id="t2-crown" viewBox="70 -26 15 390" class="width-height1" rel="7A">
          <g transform="rotate(180) translate(-15,-83)">
            <path rel="CR2" id="274" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-274'] ? '#fff000' : '' )}"
            @click="drawBox($event,274);" stroke="#939598" stroke-width=".216" d="M4.3 2.1c.1-.5.5-1.1.8-1.2 2.7-1 4.4-.9 6.8 0 .4.1 1.1 2 1.3 2.3 2 4.7 2.7 11.4-.7 13.6-.4.4-1.9.8-2.5.1-.5 1-2.6 1-3.6 1.1-1.6-.1-2.3-.3-3.2-.9-1.7.1-3.3.1-3.1-2.3C1.8 9 2.9 7.3 4.3 2.1z">
            </path>
          </g>   
        </svg>                
      </svg>
      <svg id="t2-surface" viewBox="70 -63 14.6 390" class="width-height1" rel="7B">
        <path fill-rule="evenodd" clip-rule="evenodd" id="317" fill="#FFFFFF"
        style="fill:#{(soapNoteForm.dentalMap['A-317'] ? '#fff000' : '' )}" @click="drawBox($event,317);"
        stroke="#939598" stroke-width=".283" d="M.5 5.3c.8-1.5 3-4 4.8-4.7.6-.5 3.4-.6 4 0 1.3.6 4 3 4.8 4.6.4.7.5 2.4.1 3.4-.7 2.1-2.6 3.9-4.6 5.3-.8.4-2 .3-2.6 0-.6-.2-4.4-3.1-6.1-5.5-.2-.2-.3-.4-.4-.5C0 7.3.1 5.8.5 5.3z">
        </path>
        <path id="318" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-318'] ? '#fff000' : '' )}"
        @click="drawBox($event,318);" stroke="#939598" stroke-width=".216" d="M.7 8.2c.9.2 2.4.2 2.7 0 .3-.1.5-1 .9-1s1.1 1.4 1.5 1.5c.2.2 2 .2 2.5.1.8-.1 1.3-1.1 2-1 .6 0 .4 1 .9 1.1.3.1 1.9-.2 2.9 0M5.2 10.8c0-.8.2-1.7.8-2.1">
        </path>
        <path id="319" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-319'] ? '#fff000' : '' )}"
        @click="drawBox($event,319);" stroke="#939598" stroke-width=".216" d="M9.3 12.7C8.9 12 8 11.5 8 11.1c-.1-.3.3-1.8.3-2.3M11.9 11.9c-.8-.2-.8-2.3-1.4-2.5-.2-.2.1-.6.5-.8">
        </path>
      </svg>
    </svg>
    <svg rel="26T">
      <g  transform = "translate(0,100)">
        <svg id="b2-crown" viewBox="124 -155 8.8 390" class="width-height1" rel="26">
          <g transform="rotate(180) translate(-66,37)">        
             <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="429" fill="#FFFFFF"
             style="fill:#{(soapNoteForm.dentalMap['A-429'] ? '#fff000' : '' )}" @click="drawBox($event,429);"
             stroke="#939598" stroke-width=".283" d="M.1 4.6C.1 3.1 1.3.7 2.5.3c.6-.4 1.6.3 2.6.5 1.6.5 4 .8 5.8.9 5.3 2.9 1.1 15.6-.6 19.4-.1.1-.2.3-.3.4-.7.5-6 .2-6.7-1.4C2.9 20.3.7 10 .1 4.6z">
             </path>          
          </g>
        </svg>     
        <svg rel="26G">
          <svg id="b2-surface" viewBox="70 -127 14.2 390" class="width-height1"
          rel="26B">
            <path fill-rule="evenodd" clip-rule="evenodd" id="381" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-381'] ? '#fff000' : '' )}" @click="drawBox($event,381);"
            stroke="#939598" stroke-width=".283" d="M5.1.6c-.6.3-1.6 1.5-1.8 2.2-.2.7-.4 1.2-.7 1.7C2.3 4.9 1 5.9.7 6.4c-.3.5-.9 2.6-.3 4.3.3 1 2 2.7 2.9 3.1.9.4 4.1.5 5.8.2 1.2-.5 3.3-1.7 4.6-4.3.4-1 .6-2.2-.1-3.1C11.8 4.3 9.7 2.2 7.7.4 7.1.1 6 0 5.1.6z">
            </path>
            <path id="382" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-382'] ? '#fff000' : '' )}"
            @click="drawBox($event,382);" stroke="#939598" stroke-width=".216" d="M5.4 2.2c.3-.5.8-.7 1.1-.7.7 0 1 .6 1 1.5 0 .2 0 .5.1.7.6.1.8.4.5 1.1.6.2 1.2.3 1.8.2.4 0 .8.6 1.2 1.1.6.7.5 1.5.4 2.3-.2.3-.2.6-1.1.6-.5-.3-.6-.6-.7-.7-.6 0-1.2-.1-1.8-.1-.4-.1-.7-.2-1-.3-.5-.1-1-.2-1.4-.2-1 .2-2.6 1.8-3.1.2v-.6c0-.8.4-1.1.9-1.4 0-.4.1-.7.1-1.1.4-.3.7-.5 1.1-.8 0-.3 0-.5.1-.8.3-.3.5-.7.8-1z">
            </path>
            <path id="383" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-383'] ? '#fff000' : '' )}"
            @click="drawBox($event,383);" stroke="#939598" stroke-width=".216" d="M5.5 2.3c-.4.2-.7.5-1 1-.1.2.1.5 0 .8-.1.2-.9.5-1.1.7-.1.2 0 .7-.1 1.1-.1.3-.7.4-.8.7-.1.3-.1.9-.1 1.3M6.5 1.6c.5-.2.7 0 1 .7.2.4-.1 1.1.1 1.4.2.2.5.1.6.3.1.2-.2.7 0 .8.3.4 2.1 0 2.2.5.1.5.9.9 1.1 1.3.2.4.1 1.2.1 1.9M5.1 7.7c.6-.1 1.7 0 2.1.3.5.4 1.8.1 2.5.3">
            </path>
          </svg>
        </svg>
        <svg id="b2-crown" viewBox="70 -150 13.7 390" class="width-height1" rel="26A">
          <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="429" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-429'] ? '#fff000' : '' )}" @click="drawBox($event,429);"
          stroke="#939598" stroke-width=".283" d="M.1 4.6C.1 3.1 1.3.7 2.5.3c.6-.4 1.6.3 2.6.5 1.6.5 4 .8 5.8.9 5.3 2.9 1.1 15.6-.6 19.4-.1.1-.2.3-.3.4-.7.5-6 .2-6.7-1.4C2.9 20.3.7 10 .1 4.6z">
          </path>
        </svg>
        <svg id="b2-root" viewBox="70 -165 8.4 390" class="width-height1" rel="26">
          <path rel="CR1" fill-rule="evenodd" clip-rule="evenodd" fill="#F2ECBE"
          stroke="#939598" stroke-width=".283" stroke-miterlimit="22.926" d="M.6 1.9c-.7 5.5-.8 14 1.2 21 1.6 6.1 2.4 10.1 4.6.7.6-4.2 3.3-11.3 1-20.5L4.7.1.6 1.9z">
          </path>
        </svg>
      </g>  
    </svg>
    <svg rel="8T">
      <svg rel="8G">
        <svg id="t1-root" viewBox="45 -10 12 390" class="width-height1" rel="8">
          <path rel="CR1" fill-rule="evenodd" clip-rule="evenodd" fill="#F2ECBE"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M.6 31c-1-4.8-.5-10.5.5-14 1.2-4.4 1.2-8.4 1.6-12.6.4-2.4 2.7-8.1 6.4-.1 3.5 8.4 3 22.4 2.4 24.2L7 31.2.6 31z">
          </path>
        </svg>
        <svg id="t1-crown" viewBox="53 -32 19.4 460" class="width-height1" rel="8A">
          <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="275" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-275'] ? '#fff000' : '' )}" @click="drawBox($event,275);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M3.4 4.4c.1-.2.4-.5.5-.6C5.4 2.2 7 .6 9.6.2c5.7-.8 7.2 4.2 9.2 12.9 1.3 5.3-.7 6.5-4.8 8.2-.3 0-.8-.3-1.3.3-3.7 1.9-6.5 1.1-6.9.5-.3-.2-.5-.1-.9.2C.1 23.5.2 18.6.2 16.7c0-2.3 2.1-6.3 3.2-11.8 0-.1-.1-.3 0-.5z">
          </path>
          <path class="elst1" d="M5.2 18.5c.3 1.2.3 2.2.1 3.7M13.3 18.3c.1.6.1 2.4 0 3">
          </path>
        </svg>
        <svg id="t1-crown" viewBox="124 -32 16.7 390" class="width-height1" rel="8A">
            <g transform="rotate(180) translate(-98,-78)">
              <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="275" fill="#FFFFFF"
              style="fill:#{(soapNoteForm.dentalMap['A-275'] ? '#fff000' : '' )}" @click="drawBox($event,275);"
              stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M3.4 4.4c.1-.2.4-.5.5-.6C5.4 2.2 7 .6 9.6.2c5.7-.8 7.2 4.2 9.2 12.9 1.3 5.3-.7 6.5-4.8 8.2-.3 0-.8-.3-1.3.3-3.7 1.9-6.5 1.1-6.9.5-.3-.2-.5-.1-.9.2C.1 23.5.2 18.6.2 16.7c0-2.3 2.1-6.3 3.2-11.8 0-.1-.1-.3 0-.5z">
              </path>
              <path class="elst1" d="M5.2 18.5c.3 1.2.3 2.2.1 3.7M13.3 18.3c.1.6.1 2.4 0 3">
              </path>
            </g>   
        </svg>        
      </svg>
      <svg id="t1-surface" viewBox="53 -73 20.4 460" class="width-height1" rel="8B">
        <path fill-rule="evenodd" clip-rule="evenodd" id="320" fill="#FFFFFF"
        style="fill:#{(soapNoteForm.dentalMap['A-320'] ? '#fff000' : '' )}" @click="drawBox($event,320);"
        stroke="#939598" stroke-width=".283" d="M6.4 1.2C7 .9 7.6.6 8.3.4 9.7.1 11.6 0 13.2.3c.7.1 1.2.6 1.7 1 .2.3 1.3.3 1.8.4 1.5.3 2.3 1.4 2.4 1.5.4.4.8.8 1 1.5.4 1.4.3 3-.3 4.7-1.4 2-3.7 6.2-6.2 7.2-.5.3-3 .1-3 .1C8.3 15.3-3.2 8.8 1.1 4.5c.4-.8 2-2.7 3.4-2.9.4-.1 1.6-.2 1.9-.4z">
        </path>
        <path id="321" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-321'] ? '#fff000' : '' )}"
        @click="drawBox($event,321);" stroke="#939598" stroke-width=".216" d="M1.1 8.9c.3-.6.6-.9 1.2-1 1.3-.1 2.7-.1 3.2.3.6.6 1.1.3 1.5-.2.6-.3 1.3-.3 2-.1h1.9c.3.2.5.4.8.6l.5-.5c.7 0 1.4-.1 2-.1 1-.4 1.9-.5 2.7-.4.7.1 1.2.5 1.4 1 .2.7.2 1.5 0 2.4-.1.6-.3 1-.7 1.4-.8-.1-1.3-.5-1.7-1.3-.8-.6-1.7-.8-2.9-.7-.5.4-1 .6-1.6.5-1.1-1-.9-1.5-2.3-1.3-.4 0-.8.1-1.3.1-.2.1-.8.7-1.5.3-.2-.3-.4-.4-.7-.5-.5-.2-1.3.4-2.1 1.2-.2.2-.3.2-.5.4-.8-.8-1.3-1.3-1.9-2.1z">
        </path>
        <path id="322" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-322'] ? '#fff000' : '' )}"
        @click="drawBox($event,322);" stroke="#939598" stroke-width=".216" d="M7 8c-.3.2-.7.6-1.1.5-.3 0-.5-.5-.9-.6-1.3 0-2.7-.1-3.1.1-.3.2-.7.6-1 1M9 7.9h1.9c.2 0 .5.6.8.6.2 0 .5-.6.7-.6h1.9M16.9 7.5c.5.1 1.1.4 1.3.8.2.4.3 1.7 0 2.6-.1.6-.2.9-.7 1.4-.6.3-1.4-.5-1.7-1.3M7.7 9.6c.8-.2 1.7-.2 2.5 0 .6.4.6 1.1 1.1 1.1.6 0 1.1-.3 1.6-.5">
        </path>
        <path id="323" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-323'] ? '#fff000' : '' )}"
        @click="drawBox($event,323);" stroke="#939598" stroke-width=".216" d="M14.8 15.7c-.6-.5-1.4-.9-2.2-1.2-.3-.1-.5-1.2-1-1.8-.2-.5-.4-1.3-.3-1.9">
        </path>
        <path id="324" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-324'] ? '#fff000' : '' )}"
        @click="drawBox($event,324);" stroke="#939598" stroke-width=".216" d="M2.7 11.1c.8-.4 1.4-1 2.1-1.6.4-.2 1-.3 1.4.4.1 1.1.4 2 .7 2.8.3 1.2 2.1 2.8 3.1 3.5">
        </path>
      </svg>
    </svg>
    <svg rel="25T">
      <g  transform = "translate(0,35)">
        <svg rel="25G">
          <svg id="b1-crown" viewBox="124 -155 8.8 390" class="width-height1" rel="25">
             <g transform="rotate(180) translate(-90,18)">  
               <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="430" fill="#FFFFFF"
               style="fill:#{(soapNoteForm.dentalMap['A-430'] ? '#fff000' : '' )}" @click="drawBox($event,430);"
               stroke="#939598" stroke-width=".283" d="M.1 4.6C.1 3.1 1.3.7 2.5.3c.6-.4 1.6.3 2.6.5 1.6.5 4 .8 5.8.9 5.3 2.9 1.1 15.6-.6 19.4-.1.1-.2.3-.3.4-.7.5-6 .2-6.7-1.4C2.9 20.3.7 10 .1 4.6z">
               </path>
             </g>
          </svg>              
          <svg id="b1-surface" viewBox="48 -150 12.4 400" class="width-height1"
          rel="25B">
            <path fill-rule="evenodd" clip-rule="evenodd" id="384" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-384'] ? '#fff000' : '' )}" @click="drawBox($event,384);"
            stroke="#939598" stroke-width=".283" d="M.3 6.2C1.1 4.1 2.8 1.3 3.6.7c1.1-.8 2.2-.7 3-.4 1.3.6 4.3 3.8 5.4 6 .3.7.3 2.6.2 4.2-.3 1.1-.9 2-1.6 2.5-.8.4-1.8.5-3.1.9-1.1.4-3.6.4-4.6-.1C1.3 13 .6 11 .3 9.9.2 8.8 0 7.4.3 6.2z">
            </path>
            <path id="385" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-385'] ? '#fff000' : '' )}"
            @click="drawBox($event,385);" stroke="#939598" stroke-width=".216" d="M5.2 1.7c.7 0 1.2.4 1.3.9.2.4.4 1 .6 1.4l1.5 1.2c.7.5 1.3 1 1.6 1.8.2.5-.1.7-.6.7h-.7c-.5-.2-1.1-.1-2 0-.9.1-1.8 0-2.7-.1H2.9c-.5-.1-1 0-1.1-.6 0-.7.2-1.3.6-2 .4-.6.8-1.3 1.2-1.9.4-.6.9-1.2 1.6-1.4z">
            </path>
            <path id="386" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-386'] ? '#fff000' : '' )}"
            @click="drawBox($event,386);" stroke="#939598" stroke-width=".216" d="M5.1 1.8c-.4 0-.9.3-1.2.8-.5.8-1.3 2.1-1.5 2.5-.3.4-.6 1.3-.5 2M6.3 2.7c.4.3.6 1.1.8 1.3.4.5 2.1 1.4 2.8 2.5.2.2.4.7.2 1-.3.2-.8.2-1.2.1M2.9 7.4c1.4.1 2.7.4 4 .2">
            </path>
          </svg>
        </svg>
        <svg id="b1-crown" viewBox="56 -200 11.8 460" class="width-height1" rel="25A">
          <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="430" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-430'] ? '#fff000' : '' )}" @click="drawBox($event,430);"
          stroke="#939598" stroke-width=".283" d="M.1 4.6C.1 3.1 1.3.7 2.5.3c.6-.4 1.6.3 2.6.5 1.6.5 4 .8 5.8.9 5.3 2.9 1.1 15.6-.6 19.4-.1.1-.2.3-.3.4-.7.5-6 .2-6.7-1.4C2.9 20.3.7 10 .1 4.6z">
          </path>
        </svg>
        <svg id="b1-root" viewBox="53 -220 11.8 460" class="width-height1" rel="25">
          <path rel="CR1" fill-rule="evenodd" clip-rule="evenodd" fill="#F2ECBE"
          stroke="#939598" stroke-width=".283" stroke-miterlimit="22.926" d="M.6 1.9c-.7 5.5-.8 14 1.2 21 1.6 6.1 2.4 10.1 4.6.7.6-4.2 3.3-11.3 1-20.5L4.7.1.6 1.9z">
          </path>
        </svg>
      </g>   
    </svg>
    <svg rel="9T">
      <svg rel="9G">
        <svg id="t1-root" viewBox="20 -10 12 390" class="width-height1" rel="9">
          <path rel="CR1" fill-rule="evenodd" clip-rule="evenodd" fill="#F2ECBE"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M.6 31c-1-4.8-.5-10.5.5-14 1.2-4.4 1.2-8.4 1.6-12.6.4-2.4 2.7-8.1 6.4-.1 3.5 8.4 3 22.4 2.4 24.2L7 31.2.6 31z">
          </path>
        </svg>
        <svg id="t1-crown" viewBox="23 -32 19.4 460" class="width-height1" rel="9A">
          <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="276" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-276'] ? '#fff000' : '' )}" @click="drawBox($event,276);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M3.4 4.4c.1-.2.4-.5.5-.6C5.4 2.2 7 .6 9.6.2c5.7-.8 7.2 4.2 9.2 12.9 1.3 5.3-.7 6.5-4.8 8.2-.3 0-.8-.3-1.3.3-3.7 1.9-6.5 1.1-6.9.5-.3-.2-.5-.1-.9.2C.1 23.5.2 18.6.2 16.7c0-2.3 2.1-6.3 3.2-11.8 0-.1-.1-.3 0-.5z">
          </path>
          <path id="277" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-277'] ? '#fff000' : '' )}"
          @click="drawBox($event,277);" stroke="#939598" stroke-width=".216" d="M5.2 18.5c.3 1.2.3 2.2.1 3.7M13.3 18.3c.1.6.1 2.4 0 3">
          </path>
        </svg>
        <svg id="t1-crown" viewBox="124 -32 16.7 390" class="width-height1" rel="9A">
            <g transform="rotate(180) translate(-122,-78)">     
               <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="276" fill="#FFFFFF"
               style="fill:#{(soapNoteForm.dentalMap['A-276'] ? '#fff000' : '' )}" @click="drawBox($event,276);"
               stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M3.4 4.4c.1-.2.4-.5.5-.6C5.4 2.2 7 .6 9.6.2c5.7-.8 7.2 4.2 9.2 12.9 1.3 5.3-.7 6.5-4.8 8.2-.3 0-.8-.3-1.3.3-3.7 1.9-6.5 1.1-6.9.5-.3-.2-.5-.1-.9.2C.1 23.5.2 18.6.2 16.7c0-2.3 2.1-6.3 3.2-11.8 0-.1-.1-.3 0-.5z">
               </path>
               <path id="277" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-277'] ? '#fff000' : '' )}"
               @click="drawBox($event,277);" stroke="#939598" stroke-width=".216" d="M5.2 18.5c.3 1.2.3 2.2.1 3.7M13.3 18.3c.1.6.1 2.4 0 3">
               </path>
            </g>
        </svg>           
      </svg>
      <svg id="t1-surface" viewBox="23 -73 20.4 460" class="width-height1" rel="9B">
        <path fill-rule="evenodd" clip-rule="evenodd" id="325" fill="#FFFFFF"
        style="fill:#{(soapNoteForm.dentalMap['A-325'] ? '#fff000' : '' )}" @click="drawBox($event,325);"
        stroke="#939598" stroke-width=".283" d="M6.4 1.2C7 .9 7.6.6 8.3.4 9.7.1 11.6 0 13.2.3c.7.1 1.2.6 1.7 1 .2.3 1.3.3 1.8.4 1.5.3 2.3 1.4 2.4 1.5.4.4.8.8 1 1.5.4 1.4.3 3-.3 4.7-1.4 2-3.7 6.2-6.2 7.2-.5.3-3 .1-3 .1C8.3 15.3-3.2 8.8 1.1 4.5c.4-.8 2-2.7 3.4-2.9.4-.1 1.6-.2 1.9-.4z">
        </path>
        <path id="326" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-326'] ? '#fff000' : '' )}"
        @click="drawBox($event,326);" stroke="#939598" stroke-width=".216" d="M1.1 8.9c.3-.6.6-.9 1.2-1 1.3-.1 2.7-.1 3.2.3.6.6 1.1.3 1.5-.2.6-.3 1.3-.3 2-.1h1.9c.3.2.5.4.8.6l.5-.5c.7 0 1.4-.1 2-.1 1-.4 1.9-.5 2.7-.4.7.1 1.2.5 1.4 1 .2.7.2 1.5 0 2.4-.1.6-.3 1-.7 1.4-.8-.1-1.3-.5-1.7-1.3-.8-.6-1.7-.8-2.9-.7-.5.4-1 .6-1.6.5-1.1-1-.9-1.5-2.3-1.3-.4 0-.8.1-1.3.1-.2.1-.8.7-1.5.3-.2-.3-.4-.4-.7-.5-.5-.2-1.3.4-2.1 1.2-.2.2-.3.2-.5.4-.8-.8-1.3-1.3-1.9-2.1z">
        </path>
        <path id="327" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-327'] ? '#fff000' : '' )}"
        @click="drawBox($event,327);" stroke="#939598" stroke-width=".216" d="M7 8c-.3.2-.7.6-1.1.5-.3 0-.5-.5-.9-.6-1.3 0-2.7-.1-3.1.1-.3.2-.7.6-1 1M9 7.9h1.9c.2 0 .5.6.8.6.2 0 .5-.6.7-.6h1.9M16.9 7.5c.5.1 1.1.4 1.3.8.2.4.3 1.7 0 2.6-.1.6-.2.9-.7 1.4-.6.3-1.4-.5-1.7-1.3M7.7 9.6c.8-.2 1.7-.2 2.5 0 .6.4.6 1.1 1.1 1.1.6 0 1.1-.3 1.6-.5">
        </path>
        <path id="328" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-328'] ? '#fff000' : '' )}"
        @click="drawBox($event,328);" stroke="#939598" stroke-width=".216" d="M14.8 15.7c-.6-.5-1.4-.9-2.2-1.2-.3-.1-.5-1.2-1-1.8-.2-.5-.4-1.3-.3-1.9">
        </path>
        <path id="329" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-329'] ? '#fff000' : '' )}"
        @click="drawBox($event,329);" stroke="#939598" stroke-width=".216" d="M2.7 11.1c.8-.4 1.4-1 2.1-1.6.4-.2 1-.3 1.4.4.1 1.1.4 2 .7 2.8.3 1.2 2.1 2.8 3.1 3.5">
        </path>
      </svg>  
    </svg>
    <svg rel="24T">
      <g transform = "translate(0,100)">
        <svg id="b1-crown" viewBox="124 -155 8.8 390" class="width-height1" rel="24">
            <g transform="rotate(180) translate(-116,37)">   
               <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="431" fill="#FFFFFF"
               style="fill:#{(soapNoteForm.dentalMap['A-431'] ? '#fff000' : '' )}" @click="drawBox($event,431);"
               stroke="#939598" stroke-width=".283" d="M.1 4.6C.1 3.1 1.3.7 2.5.3c.6-.4 1.6.3 2.6.5 1.6.5 4 .8 5.8.9 5.3 2.9 1.1 15.6-.6 19.4-.1.1-.2.3-.3.4-.7.5-6 .2-6.7-1.4C2.9 20.3.7 10 .1 4.6z">
               </path>            
            </g>
        </svg>    
        <svg rel="24G">
          <svg id="b1-surface" viewBox="20 -132 12.4 400" class="width-height1"
          rel="24B">
            <path fill-rule="evenodd" clip-rule="evenodd" id="387" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-387'] ? '#fff000' : '' )}" @click="drawBox($event,387);"
            stroke="#939598" stroke-width=".283" d="M.3 6.2C1.1 4.1 2.8 1.3 3.6.7c1.1-.8 2.2-.7 3-.4 1.3.6 4.3 3.8 5.4 6 .3.7.3 2.6.2 4.2-.3 1.1-.9 2-1.6 2.5-.8.4-1.8.5-3.1.9-1.1.4-3.6.4-4.6-.1C1.3 13 .6 11 .3 9.9.2 8.8 0 7.4.3 6.2z">
            </path>
            <path id="388" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-388'] ? '#fff000' : '' )}"
            @click="drawBox($event,388);" stroke="#939598" stroke-width=".216" d="M5.2 1.7c.7 0 1.2.4 1.3.9.2.4.4 1 .6 1.4l1.5 1.2c.7.5 1.3 1 1.6 1.8.2.5-.1.7-.6.7h-.7c-.5-.2-1.1-.1-2 0-.9.1-1.8 0-2.7-.1H2.9c-.5-.1-1 0-1.1-.6 0-.7.2-1.3.6-2 .4-.6.8-1.3 1.2-1.9.4-.6.9-1.2 1.6-1.4z">
            </path>
            <path id="389" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-389'] ? '#fff000' : '' )}"
            @click="drawBox($event,389);" stroke="#939598" stroke-width=".216" d="M5.1 1.8c-.4 0-.9.3-1.2.8-.5.8-1.3 2.1-1.5 2.5-.3.4-.6 1.3-.5 2M6.3 2.7c.4.3.6 1.1.8 1.3.4.5 2.1 1.4 2.8 2.5.2.2.4.7.2 1-.3.2-.8.2-1.2.1M2.9 7.4c1.4.1 2.7.4 4 .2">
            </path>
          </svg>
        </svg>
        <svg id="b1-crown" viewBox="24 -180 11.8 460" class="width-height1" rel="24A">
          <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="431" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-431'] ? '#fff000' : '' )}" @click="drawBox($event,431);"
          stroke="#939598" stroke-width=".283" d="M.1 4.6C.1 3.1 1.3.7 2.5.3c.6-.4 1.6.3 2.6.5 1.6.5 4 .8 5.8.9 5.3 2.9 1.1 15.6-.6 19.4-.1.1-.2.3-.3.4-.7.5-6 .2-6.7-1.4C2.9 20.3.7 10 .1 4.6z">
          </path>
        </svg>
        <svg id="b1-root" viewBox="23 -200 7.8 460" class="width-height1" rel="24">
          <path rel="CR1" fill-rule="evenodd" clip-rule="evenodd" fill="#F2ECBE"
          stroke="#939598" stroke-width=".283" stroke-miterlimit="22.926" d="M.6 1.9c-.7 5.5-.8 14 1.2 21 1.6 6.1 2.4 10.1 4.6.7.6-4.2 3.3-11.3 1-20.5L4.7.1.6 1.9z">
          </path>
        </svg>
      </g>   
    </svg>
    <svg rel="10T">
      <svg rel="10G">
        <svg id="t2-root" viewBox="-5 -10 9.8 390" class="width-height1" rel="10">
          <path rel="CR1" fill-rule="evenodd" clip-rule="evenodd" fill="#F2ECBE"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M8.5 30.3c.3-.5.5-1.4.8-2.2 1.2-3.1-1-13.6-.3-23.3 0-.6.2-1.5.2-2.2C9-.4 6.5-1.5 4.7 4c-.9 2-1.2 4.7-1.4 7.1-.4 6.3-4 14.7-3.1 17.8.1.5.3 1.4.7 1.5l4.5 2.2 3.1-2.3z">
          </path>
        </svg>
        <svg id="t2-crown" viewBox="-5 -28 15 390" class="width-height1" rel="10A">
          <path rel="CR2" id="280" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-280'] ? '#fff000' : '' )}"
          @click="drawBox($event,280);" stroke="#939598" stroke-width=".216" d="M4.3 2.1c.1-.5.5-1.1.8-1.2 2.7-1 4.4-.9 6.8 0 .4.1 1.1 2 1.3 2.3 2 4.7 2.7 11.4-.7 13.6-.4.4-1.9.8-2.5.1-.5 1-2.6 1-3.6 1.1-1.6-.1-2.3-.3-3.2-.9-1.7.1-3.3.1-3.1-2.3C1.8 9 2.9 7.3 4.3 2.1z">
          </path>
        </svg>
        <svg id="t2-crown" viewBox="124 -32 16.7 390" class="width-height1" rel="10A">
            <g transform="rotate(180) translate(-145,-75)">   
               <path rel="CR2" id="280" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-280'] ? '#fff000' : '' )}"
               @click="drawBox($event,280);" stroke="#939598" stroke-width=".216" d="M4.3 2.1c.1-.5.5-1.1.8-1.2 2.7-1 4.4-.9 6.8 0 .4.1 1.1 2 1.3 2.3 2 4.7 2.7 11.4-.7 13.6-.4.4-1.9.8-2.5.1-.5 1-2.6 1-3.6 1.1-1.6-.1-2.3-.3-3.2-.9-1.7.1-3.3.1-3.1-2.3C1.8 9 2.9 7.3 4.3 2.1z">
               </path>            
            </g>
        </svg>        
      </svg>
      <svg id="t2-surface" viewBox="-5 -61 14.6 390" class="width-height1" rel="10B">
        <path fill-rule="evenodd" clip-rule="evenodd" id="330" fill="#FFFFFF"
        style="fill:#{(soapNoteForm.dentalMap['A-330'] ? '#fff000' : '' )}" @click="drawBox($event,330);"
        stroke="#939598" stroke-width=".283" d="M.5 5.3c.8-1.5 3-4 4.8-4.7.6-.5 3.4-.6 4 0 1.3.6 4 3 4.8 4.6.4.7.5 2.4.1 3.4-.7 2.1-2.6 3.9-4.6 5.3-.8.4-2 .3-2.6 0-.6-.2-4.4-3.1-6.1-5.5-.2-.2-.3-.4-.4-.5C0 7.3.1 5.8.5 5.3z">
        </path>
        <path id="331" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-331'] ? '#fff000' : '' )}"
        @click="drawBox($event,331);" stroke="#939598" stroke-width=".216" d="M.7 8.2c.9.2 2.4.2 2.7 0 .3-.1.5-1 .9-1s1.1 1.4 1.5 1.5c.2.2 2 .2 2.5.1.8-.1 1.3-1.1 2-1 .6 0 .4 1 .9 1.1.3.1 1.9-.2 2.9 0M5.2 10.8c0-.8.2-1.7.8-2.1">
        </path>
        <path id="332" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-332'] ? '#fff000' : '' )}"
        @click="drawBox($event,332);" stroke="#939598" stroke-width=".216" d="M9.3 12.7C8.9 12 8 11.5 8 11.1c-.1-.3.3-1.8.3-2.3M11.9 11.9c-.8-.2-.8-2.3-1.4-2.5-.2-.2.1-.6.5-.8">
        </path>
      </svg>      
    </svg>
    <svg rel="23T">
      <g  transform = "translate(0,100)">
        <svg id="b1-crown" viewBox="124 -155 8.8 390" class="width-height1" rel="23">
            <g transform="rotate(180) translate(-140,37)">   
              <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="432" fill="#FFFFFF"
              style="fill:#{(soapNoteForm.dentalMap['A-432'] ? '#fff000' : '' )}" @click="drawBox($event,432);"
              stroke="#939598" stroke-width=".283" d="M.1 4.6C.1 3.1 1.3.7 2.5.3c.6-.4 1.6.3 2.6.5 1.6.5 4 .8 5.8.9 5.3 2.9 1.1 15.6-.6 19.4-.1.1-.2.3-.3.4-.7.5-6 .2-6.7-1.4C2.9 20.3.7 10 .1 4.6z">
              </path>            
            </g>
        </svg>
        <svg rel="23G">
          <svg id="b2-surface" viewBox="-5 -129 14.2 390" class="width-height1"
          rel="23B">
            <path fill-rule="evenodd" clip-rule="evenodd" id="390" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-390'] ? '#fff000' : '' )}" @click="drawBox($event,390);"
            stroke="#939598" stroke-width=".283" d="M5.1.6c-.6.3-1.6 1.5-1.8 2.2-.2.7-.4 1.2-.7 1.7C2.3 4.9 1 5.9.7 6.4c-.3.5-.9 2.6-.3 4.3.3 1 2 2.7 2.9 3.1.9.4 4.1.5 5.8.2 1.2-.5 3.3-1.7 4.6-4.3.4-1 .6-2.2-.1-3.1C11.8 4.3 9.7 2.2 7.7.4 7.1.1 6 0 5.1.6z">
            </path>
            <path id="391" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-391'] ? '#fff000' : '' )}"
            @click="drawBox($event,391);" stroke="#939598" stroke-width=".216" d="M5.4 2.2c.3-.5.8-.7 1.1-.7.7 0 1 .6 1 1.5 0 .2 0 .5.1.7.6.1.8.4.5 1.1.6.2 1.2.3 1.8.2.4 0 .8.6 1.2 1.1.6.7.5 1.5.4 2.3-.2.3-.2.6-1.1.6-.5-.3-.6-.6-.7-.7-.6 0-1.2-.1-1.8-.1-.4-.1-.7-.2-1-.3-.5-.1-1-.2-1.4-.2-1 .2-2.6 1.8-3.1.2v-.6c0-.8.4-1.1.9-1.4 0-.4.1-.7.1-1.1.4-.3.7-.5 1.1-.8 0-.3 0-.5.1-.8.3-.3.5-.7.8-1z">
            </path>
            <path id="392" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-392'] ? '#fff000' : '' )}"
            @click="drawBox($event,392);" stroke="#939598" stroke-width=".216" d="M5.5 2.3c-.4.2-.7.5-1 1-.1.2.1.5 0 .8-.1.2-.9.5-1.1.7-.1.2 0 .7-.1 1.1-.1.3-.7.4-.8.7-.1.3-.1.9-.1 1.3M6.5 1.6c.5-.2.7 0 1 .7.2.4-.1 1.1.1 1.4.2.2.5.1.6.3.1.2-.2.7 0 .8.3.4 2.1 0 2.2.5.1.5.9.9 1.1 1.3.2.4.1 1.2.1 1.9M5.1 7.7c.6-.1 1.7 0 2.1.3.5.4 1.8.1 2.5.3">
            </path>
          </svg>
        </svg>
        <svg id="b2-crown" viewBox="-5 -151 13.7 390" class="width-height1" rel="23A">
          <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="432" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-432'] ? '#fff000' : '' )}" @click="drawBox($event,432);"
          stroke="#939598" stroke-width=".283" d="M.1 4.6C.1 3.1 1.3.7 2.5.3c.6-.4 1.6.3 2.6.5 1.6.5 4 .8 5.8.9 5.3 2.9 1.1 15.6-.6 19.4-.1.1-.2.3-.3.4-.7.5-6 .2-6.7-1.4C2.9 20.3.7 10 .1 4.6z">
          </path>
        </svg>
        <svg id="b2-root" viewBox="-5 -166 8.4 390" class="width-height1" rel="23">
          <path rel="CR1" fill-rule="evenodd" clip-rule="evenodd" fill="#F2ECBE"
          stroke="#939598" stroke-width=".283" stroke-miterlimit="22.926" d="M.6 1.9c-.7 5.5-.8 14 1.2 21 1.6 6.1 2.4 10.1 4.6.7.6-4.2 3.3-11.3 1-20.5L4.7.1.6 1.9z">
          </path>
        </svg>
      </g>  
    </svg>
    <svg rel="11T">
      <svg rel="11G">
        <svg id="t3-root" viewBox="-36 -10 10.3 460" class="width-height1" rel="11">
          <path rel="CR1" fill-rule="evenodd" clip-rule="evenodd" fill="#F2ECBE"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M.3 38.3c-.3-9.7-.5-26.9 3.8-36 1.3-2.7 4.3-3.2 4.3.2.2 4.9-.6 8.6-.4 13.9-.4 2.8 2.1 9.5 2.1 12.6.1 4.2.1 6-1.4 9.4l-4.3 1.2-4.1-1.3z">
          </path>
        </svg>
        <svg id="t3-crown" viewBox="-36 -32 17.4 460" class="width-height1" rel="11A">
          <path rel="CR2" id="284" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-284'] ? '#fff000' : '' )}"
          @click="drawBox($event,284);" stroke="#939598" stroke-width=".216" d="M4.5 2.2c.2-.5.5-1 .9-1.2C6.5.4 7.6 0 9.1.1c1.7 0 3.7.9 4.1 2 .2.4 2.4 5.6 3.8 8.2 1.3 4.6-.9 9.1-4.6 10-.6 0-.6-.8-.8-.7 0 0-1 1.5-2.6 2-1.5.2-2.1-.5-3-1-6.3-3.8-7.5-6.5-2.8-13 .9-1.9.8-3 1.3-5.4z">
          </path>
          <path id="285" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-285'] ? '#fff000' : '' )}"
          @click="drawBox($event,285);" stroke="#939598" stroke-width=".216" d="M11.6 9.4c-1.1 2.9-1.4 5.9-1 9.5">
          </path>
        </svg>
        <svg id="t3-crown" viewBox="124 -32 16.7 390" class="width-height1" rel="11A">
            <g transform="rotate(180) translate(-173,-75)">         
              <path rel="CR2" id="284" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-284'] ? '#fff000' : '' )}"
              @click="drawBox($event,284);" stroke="#939598" stroke-width=".216" d="M4.5 2.2c.2-.5.5-1 .9-1.2C6.5.4 7.6 0 9.1.1c1.7 0 3.7.9 4.1 2 .2.4 2.4 5.6 3.8 8.2 1.3 4.6-.9 9.1-4.6 10-.6 0-.6-.8-.8-.7 0 0-1 1.5-2.6 2-1.5.2-2.1-.5-3-1-6.3-3.8-7.5-6.5-2.8-13 .9-1.9.8-3 1.3-5.4z">
              </path>
              <path id="285" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-285'] ? '#fff000' : '' )}"
              @click="drawBox($event,285);" stroke="#939598" stroke-width=".216" d="M11.6 9.4c-1.1 2.9-1.4 5.9-1 9.5">
              </path>
            </g>
        </svg>          
      </svg>
      <svg id="t3-surface" viewBox="-36 -71 19.2 460" class="width-height1"
      rel="11B">
        <path fill-rule="evenodd" clip-rule="evenodd" id="333" fill="#FFFFFF"
        style="fill:#{(soapNoteForm.dentalMap['A-333'] ? '#fff000' : '' )}" @click="drawBox($event,333);"
        stroke="#939598" stroke-width=".283" d="M.7 4.6c-.5.7-.9 1.5-.2 3.5 1.9 4.8 5.6 8.7 8.3 9.3.9.4 2 .4 2.8 0 3.1-1.4 5.2-4.1 7-7.1.6-1.4.6-2.7.1-3.6C17.4 4 14.2 1.4 12.2.6 10.9 0 8.8.2 7.6.6c-2.7.7-5.9 2.5-6.9 4z">
        </path>
        <path id="334" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-334'] ? '#fff000' : '' )}"
        @click="drawBox($event,334);" stroke="#939598" stroke-width=".216" d="M6.3 6.7C6 7.1 6 7.8 6 8.3c.1.5.4 1 .7 1.3.6.6.6 1.4.6 2.2.3-.1.6-.1.9-.2.4-.2.7-.4 1.1-.5.4 0 1 .1 1.1 0 0-.1 1 .2 1 .5.1.3.2 1.3 0 1.8-.1.5.3.5 1.1.1.6-.4.9-1 1.2-1.7.3-.3.4-.7.3-1.1 0-.4.1-.8.1-1.2.1-.6 0-1.2-.5-1.7-.4-.2-.7-.4-1.2-.4-.3.1-.6.3-.8.6-.7.8-2 2.5-3.1 1.8.1-.5.2-1.1.2-1.6 0-.6-.3-.9-.7-1.2-.5-.3-1.1-.3-1.7-.3z">
        </path>
        <path id="335" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-335'] ? '#fff000' : '' )}"
        @click="drawBox($event,335);" stroke="#939598" stroke-width=".216" d="M1.9 5.8c-.3.7.5 1.4.6 1.7.6 2.3 3 4 3.3 4.1.4.2 1.7.3 2.4 0 .2-.1.5-.4.7-.5.4-.2 1.7-.2 2.1 0 .3.2.6.6.6.9-.1.6-.3 1.6 0 1.7.5.1.9-.3 1.3-.7.4-.4.6-1.3.9-1.5.3-.4.2-.8.6-.9.5-.1 1.1-.3 1.6-.6s.8-.2 1.2 0">
        </path>
        <path id="336" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-336'] ? '#fff000' : '' )}"
        @click="drawBox($event,336);" stroke="#939598" stroke-width=".216" d="M11.6 7.9c.1-.4.5-.6 1-.6.4 0 1 .3 1.3.8.2.4.2.9.2 1.4-.1.7-.2 1.4 0 1.7M6.7 9.6c.6.4.5 1.4.6 2.2h.5c.2.9-.2 2.8.1 3.1 0 .1.2.3.4.3.1.1.1.3 0 .5M6.3 6.7c1.5-.1 2.3.5 2.5 1.4 0 .7-.4 1.6-.1 2 .2.3.6.6.7 1">
        </path>
      </svg>                  
    </svg>
    <svg rel="22T">
      <g  transform = "translate(0,35)">
        <svg rel="22G">
          <svg id="b3-surface" viewBox="-32 -110 15.5 400" class="width-height1"
          rel="22B">
            <path fill-rule="evenodd" clip-rule="evenodd" id="393" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-393'] ? '#fff000' : '' )}" @click="drawBox($event,393);"
            stroke="#939598" stroke-width=".283" d="M.6 6.1C1 5.5 4.4 1.9 6.2.5c1-.6 2.4-.4 3.2 0 1.6.9 2.7 1.6 3.8 3 .7.8 1.5 2.3 1.8 3.5.6 1.4.4 2.9.1 4.2-.5 1.4-2.2 4.7-3.3 5.1-.9.3-4.2.2-5 0-.4-.1-2.6-1.9-3.4-2.6-1.1-1.2-2-2.7-2.9-4.2-.4-.8-.5-2.3.1-3.4z">
            </path>
            <path id="394" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-394'] ? '#fff000' : '' )}"
            @click="drawBox($event,394);" stroke="#939598" stroke-width=".216" d="M3.4 6.9c.1-.6.4-.8.7-1 .7-.2.7-.5 1.4-1 .4-2.3.2-2.1 2.1-3.4.7.6.2 3.4.2 4.3.2 2.8-.6 3.5-1.4 3.4-.6.4-1.9-.3-2.6-.6-.3-.5-.7-.8-.4-1.7z">
            </path>
            <path id="395" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-395'] ? '#fff000' : '' )}"
            @click="drawBox($event,395);" stroke="#939598" stroke-width=".216" d="M9.7 4.9c-.4.4.2 1.1.3 1.3.2.4.4 1.1.1 1.5-.2.2-.7 0-.7.4 0 .5.1.8.2 1 .7.3 1.6.5 2.3-.1.4-.4.3-.8.5-1.1.3-.6.9-.3 1.1-1-.1-.7-.4-1.1-.9-1.8-.1-.1-.2-.4-.5-.6-.2-.4-1.9-.4-2.4.4z">
            </path>
            <path id="396" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-396'] ? '#fff000' : '' )}"
            @click="drawBox($event,396);" stroke="#939598" stroke-width=".216" d="M5.4 4.9c.3-.5.1-1.6.5-2 .3-.4 1.3-1.4 1.6-1.4.5.1.1 4.1.2 6.2M10.4 4.4c.6-.1 1.5-.1 1.7 0 .2.1.9 1.1 1 1.3.1.3.5 1 .4 1.2-.1.2-.4.3-.6.4-.2.1-.4.3-.5.5M10.1 6.1c.1.5.1 1.3 0 1.6-.2.2-.5 0-.6.2-.1.1 0 .9.1 1.1.1.2.5.2.8.2M3.4 7c0 .3-.1.9.1 1.2.3.5 1.1.8 1.3.9.3.1 1 .1 1.5.1">
            </path>
          </svg>
        </svg>
        <svg id="b3-crown" viewBox="-36 -164 16.1 460" class="width-height1" rel="22A">
          <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="433" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-433'] ? '#fff000' : '' )}" @click="drawBox($event,433);"
          stroke="#939598" stroke-width=".283" d="M.8 4.7C1.5 3.6 5.9.2 7.7.2c1.9 0 5.4 3.3 7.3 5.9 2.4 3.8-.3 5.8-2 9.2-.5 1 0 4.8-1.3 6.3-1.4 1-5.8 1.5-7.9-.2-.5-1.2-.5-2.4-.6-3.7-.1-2.5-4.7-10.9-2.4-13z">
          </path>
        </svg>
        <svg id="b3-root" viewBox="-36 -185 9.8 460" class="width-height1" rel="22">
          <path rel="CR1" fill-rule="evenodd" clip-rule="evenodd" fill="#F2ECBE"
          stroke="#939598" stroke-width=".283" stroke-miterlimit="22.926" d="M1.2 1.3c-2.3 2.9-1 30.4 3.3 29.8.6-.1 4.1-.6 4.5-8.2.3-4.8 1.4-17.5-.6-21.1L5.3.1 1.2 1.3z">
          </path>
        </svg>
      </g>  
    </svg>
    <svg rel="12T">
      <svg rel="12G">
        <svg viewBox="-58 -10 10.1 390" id="t4-root" class="width-height1" rel="12">
          <path rel="CR1" fill-rule="evenodd" clip-rule="evenodd" fill="#F2ECBE"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M9.5 29.1C11.2 15.9 8.2 9.8 7 2.1 6.6-.4 3.7-1.2 2.6 3.7 1.1 9.9 1 14.7.6 19.6c-.7 4.9-.8 7 .7 9.7l4 2.7 4.2-2.9z">
          </path>
        </svg>
        <svg id="t4-crown" viewBox="-58 -28 16.7 390" class="width-height1" rel="12A">
          <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="286" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-286'] ? '#fff000' : '' )}" @click="drawBox($event,286);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M.6 9.2c1-2.8 1.7-4.7 3.7-7.2 2.2-2.6 6.9-2 8.6-.5 2 2.1 2.9 4.7 3.6 7.7.6 4.8-1.3 7.1-3.5 8.2-.9-.1-1.3-.2-1.9-.9-.5 1-1.5 1.5-2.4 1.6-3.6-1.3-5.7-3.1-8-5.5-.8-1.1-.7-2.3-.1-3.4z">
          </path>
        </svg>
        <svg id="t4-crown" viewBox="124 -32 16.7 390" class="width-height1" rel="12A">
            <g transform="rotate(180) translate(-199,-75)">          
              <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="286" fill="#FFFFFF"
               style="fill:#{(soapNoteForm.dentalMap['A-286'] ? '#fff000' : '' )}" @click="drawBox($event,286);"
               stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M.6 9.2c1-2.8 1.7-4.7 3.7-7.2 2.2-2.6 6.9-2 8.6-.5 2 2.1 2.9 4.7 3.6 7.7.6 4.8-1.3 7.1-3.5 8.2-.9-.1-1.3-.2-1.9-.9-.5 1-1.5 1.5-2.4 1.6-3.6-1.3-5.7-3.1-8-5.5-.8-1.1-.7-2.3-.1-3.4z">
              </path>            
            </g>
        </svg>        
      </svg>
      <svg id="t4-surface" viewBox="-58 -57 17.1 390" class="width-height1"
      rel="12B">
        <path fill-rule="evenodd" clip-rule="evenodd" id="337" fill="#FFFFFF"
        style="fill:#{(soapNoteForm.dentalMap['A-337'] ? '#fff000' : '' )}" @click="drawBox($event,337);"
        stroke="#939598" stroke-width=".283" d="M2.2 12.2C2.2 12.1.7 10.5.3 9 .1 8.3 0 7.3.4 6.1 1.8 2.6 5 1.4 7.7.4c.8-.4 1.7-.4 2.4.1 2.8 1 5.7 1.8 6.5 4.9.4 1.2.4 2.6.2 3.7-.1 1.5-.7 2.7-1.4 3.8-.3.4-.2 1.5-.4 2.2-.5 1.4-1.8 4-5.8 5.2-.9.2-2.3.3-3.2 0-.5-.2-3.1-.8-4.2-3.8-.2-.6-.4-3-.1-3.5.1-.4.6-.4.5-.8z">
        </path>
        <path id="338" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-338'] ? '#fff000' : '' )}"
        @click="drawBox($event,338);" stroke="#939598" stroke-width=".216" d="M2.2 12.4c.4-.4.8-.9 1.5-.9.5 0 1.3 1.2 1.9 1.2.5 0 .8-.9 1.5-1.2 0-.1 2 .2 2.9-.3.4-.1.9.3 1.2.2.5-.1.9-.4 1.3-.3 1.1.4 1.9 1.5 2.9 1.8">
        </path>
        <path id="339" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-339'] ? '#fff000' : '' )}"
        @click="drawBox($event,339);" stroke="#939598" stroke-width=".216" d="M2.6 6.8c.9-.1 1.7 1.7 2 2.1.2.4.1 2.1-.5 2.7M4.5 5.8c-.1-.7.6-1.1 1.1-1.3.7-.2 1.3-.2 1.9 0 .4.3.7.7.8 1.3C8.4 6.9 8 8 7.8 8c-.4 0-1-1.1-1.3-1-.3.1-.2 3.4-.1 3.7.1.3.5.5.6.8M11.4 4.6c-.2 0-.7.2-.7.4-.1.9.1 2.2.2 2.4.1.2.7 2.2 1 2.2.3 0 1.5-1.6 2-2.8.1-.3.4-.3.6-.2M9.3 9c-.1.5-.1 1.3 0 1.6.1.1.6.5 1 .7M10.4 14.6c.3-.1.7-.5.9-1 .3-.8.1-1.4-.1-2M5.4 12.7c.3.2.2.8 0 1.3-.3.2-.4.6-.4.7 0 .2.5.4.6.7">
        </path>
      </svg>       
    </svg>
    <svg rel="21T">
      <g  transform = "translate(0,35)">
        <svg rel="21G">
          <svg id="b4-surface" viewBox="-58 -110 16.9 390" class="width-height1"
          rel="21B">
            <path fill-rule="evenodd" clip-rule="evenodd" id="397" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-397'] ? '#fff000' : '' )}" @click="drawBox($event,397);"
            stroke="#939598" stroke-width=".283" d="M.6 7.1c.9-1.5 2-3.4 2.8-4.1.7-.6 2.5-1.7 3.9-2.3C8.9 0 10-.1 11.4.6c.9.4 2.1 1.1 2.7 1.9.6.6 2.4 3.8 2.6 4.7.3 1.8-.3 2.9-.5 3.7-1 3.1-4.3 5.4-5.6 6-.9.4-2.6.5-3.4.1-3.1-1.6-5.3-3.3-6.9-7.1-.4-1-.1-2.1.3-2.8z">
            </path>
            <path id="398" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-398'] ? '#fff000' : '' )}"
            @click="drawBox($event,398);" stroke="#939598" stroke-width=".216" d="M3.5 8.4c.1-.6.3-1 .6-1.2C4.8 7 5.3 7 6 6.4c.5-.8-.2-1.8.5-1.7.7.6 1 1.3 1.3 2.1-.1 1.6-.5 2.4-1 3.1-.6.4-1.1.4-1.8.2-.4-.1-.8-.2-1.3-.3-.4 0-.4-.5-.2-1.4z">
            </path>
            <path id="399" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-399'] ? '#fff000' : '' )}"
            @click="drawBox($event,399);" stroke="#939598" stroke-width=".216" d="M9.8 8.7c.1-.6.2-1.2.2-1.8-.2-1.9.1-2.2.4-2.5.3-.2.5-.5.8-.7.9-.4.6 1.6 1 2 1.3.7 1.8 1.8 2 3.1-.1 1.1-.7 1.3-1.6 1-.7.1-1.5.3-2.4.6-.1-.5-.3-1.1-.4-1.7z">
            </path>
            <path id="400" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-400'] ? '#fff000' : '' )}"
            @click="drawBox($event,400);" stroke="#939598" stroke-width=".216" d="M6.5 4.7c.5.4 1 1.1 1.3 2.1.1.8-.3 2.6-1 3.1M4.1 7.2c-.2.2-.5.7-.6 1.2 0 .3-.2.9-.1 1.2.1.2 1 .5 1.6.5M11.2 3.7c-.6.4-1.1 1-1.3 1.6-.1.5.3 1.8 0 2.4-.3.5 0 2.6.3 2.7.3.1 1.4-.8 2.4-.6M12.2 5.7c1.5.8 1.8 1.9 2 3.2">
            </path>
          </svg>
        </svg>
        <svg id="b4-crown" viewBox="-58 -140 15.7 390" class="width-height1" rel="21A">
          <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="434" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-434'] ? '#fff000' : '' )}" @click="drawBox($event,434);"
          stroke="#939598" stroke-width=".283" d="M3.5 16.6c.2.4 2.7 1.2 7.6 1.2.1 0 .3-.2.4-.3.9-2.8 1-4.6 3.6-8.4.5-1 .8-3.3.1-4.1-1.3-1.1-3.2-2.6-4.8-3.4-.4-.2-1-.7-1.3-1C8.7.1 7.5 0 6.8.5 4.5 1.9 1.8.9.7 2.2-.3 3.5.1 5.7.5 7.6c.4 2.1 2.1 6.2 3 9z">
          </path>
        </svg>
        <svg id="b4-root" viewBox="-58 -155 8.8 390" class="width-height1" rel="21">
          <path rel="CR1" fill-rule="evenodd" clip-rule="evenodd" fill="#F2ECBE"
          stroke="#939598" stroke-width=".283" stroke-miterlimit="22.926" d="M1.2 1.3c-2.3 2.9-1 30.4 3.3 29.8.6-.1 4.1-.6 4.5-8.2.3-4.8 1.4-17.5-.6-21.1L5.3.1 1.2 1.3z">
          </path>
        </svg>
      </g>  
    </svg>
    <svg rel="13T">
      <svg rel="13G">
        <svg viewBox="-78 -10 8.8 390" id="t5-root" class="width-height1" rel="13">
          <path rel="CR1" fill-rule="evenodd" clip-rule="evenodd" fill="#F2ECBE"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M.6 29.8c-.7-9.4-1-19.3 2.3-28.1C4.3-1 6.8.3 6.8 1.7c.2 4.9-.1 9.2.6 14 .1 1.1 1.1 2.1 1.2 3.7.4 4-.6 7.2-.7 10.6L4 31.7.6 29.8z">
          </path>
        </svg>
        <svg id="t5-crown" viewBox="-78 -28 15.5 390" class="width-height1" rel="13A">
          <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="287" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-287'] ? '#fff000' : '' )}" @click="drawBox($event,287);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M4.1.6C5.3.2 6.2.2 7.6.2c1.7 0 2.8 0 3.9.5 1.4 2.6 3.1 5.1 3.6 8 .5 1.9.7 3.6-.4 5.2-1.6 1.5-3.3 2.5-5.5 3.4-.6.3-2 .3-2.6-.1-3.1-2.2-4.8-3.8-6-5.5-.1-.2-.2-.6-.2-.9C0 9 .2 7.4 1.4 5.6c.2-.2.3-.3.4-.3C2.9 3.4 3.1 1.7 4.1.6zM5.7 9c-.8-1.5-2-2.8-3.8-3.7">
          </path>
        </svg>
        <svg id="t5-crown" viewBox="124 -32 16.7 390" class="width-height1" rel="13A">
            <g transform="rotate(180) translate(-218,-75)">  
              <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="287" fill="#FFFFFF"
              style="fill:#{(soapNoteForm.dentalMap['A-287'] ? '#fff000' : '' )}" @click="drawBox($event,287);"
              stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M4.1.6C5.3.2 6.2.2 7.6.2c1.7 0 2.8 0 3.9.5 1.4 2.6 3.1 5.1 3.6 8 .5 1.9.7 3.6-.4 5.2-1.6 1.5-3.3 2.5-5.5 3.4-.6.3-2 .3-2.6-.1-3.1-2.2-4.8-3.8-6-5.5-.1-.2-.2-.6-.2-.9C0 9 .2 7.4 1.4 5.6c.2-.2.3-.3.4-.3C2.9 3.4 3.1 1.7 4.1.6zM5.7 9c-.8-1.5-2-2.8-3.8-3.7">
              </path>
            </g>
        </svg>        
      </svg>
      <svg id="t5-surface" viewBox="-78 -59 16.4 390" class="width-height1"
      rel="13B">
        <path fill-rule="evenodd" clip-rule="evenodd" id="340" fill="#FFFFFF"
        style="fill:#{(soapNoteForm.dentalMap['A-340'] ? '#fff000' : '' )}" @click="drawBox($event,340);"
        stroke="#939598" stroke-width=".283" d="M.7 10.4c0-.2-.2-.7-.3-1.1-.4-1.6 0-3.3 0-5 .4-1 2.7-3.7 5.1-4C7.6-.2 8.6.2 8.9.3c.6.2 1.6.1 2.1.3.6.1 1.5.3 1.9.6.6.4 2.6 1.8 3.2 4.1.3 1 .3 1.8 0 2.7-.3.9-.9 1.7-1.5 2 .2.5.1 2.2 0 2.7-.3 1.3-1 2.5-1.5 3.1-1.1 1.4-3 1.9-3.9 2.1-1.2.3-2.9.2-3.7.1-2.7-.8-5-3.1-5.2-4.2-.1-.5-.2-1.9 0-2.9.1-.1.3-.2.4-.5z">
        </path>
        <path id="341" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-341'] ? '#fff000' : '' )}"
        @click="drawBox($event,341);" stroke="#939598" stroke-width=".216" d="M3.2 4.6c.6-.8 1.4-.7 1.9-1.1.8-.7 1.3-.5 1.9-.4.9.7 1.2 2.3 1.9 2.4 1.1 0 1.6-1.2 2.4-1.1.9.3 1.5.5 2.1.9 0 .4-.5.6-.5 1.9-.1.8-.5.9-.9 1.3.1.2.5.5.6.8.1.6-.4 1.6-1.1 1.2-.5-.3-.9-.6-1.4-.9-.3-.1-.6-.2-.9.3-.9.5-1.7.2-2.5 0l-1.2-.6c-.2.2-.5.5-.8.7-.3-.1-.8-.2-1.2-.3V7.8c.2-.3.5-.5.7-.7-.3-.2-.7-.4-1-.6-.3-.8-.1-1.3 0-1.9z">
        </path>
        <path id="342" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-342'] ? '#fff000' : '' )}"
        @click="drawBox($event,342);" stroke="#939598" stroke-width=".216" d="M.7 10.4c.4-.4 1-.2 1.2-.3.5-.3.9-.5 1.5-.5.4 0 .9.4 1.3.4s.4-.7.8-.7c.5 0 .8.6 1.2.6.5.1 1.8.3 2.3.2.3 0 .3-.4.6-.5.3-.1.7.1 1-.1.7-.4 1.4-1 1.9-.9.4 0 1.5 1.4 2.2 1.5">
        </path>
        <path id="343" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-343'] ? '#fff000' : '' )}"
        @click="drawBox($event,343);" stroke="#939598" stroke-width=".216" d="M9.5 13.2c.3-.3.4-.8.4-1.3 0-.8-.5-1.4-.9-1.8M10 9.6c.7.3 1.2.7 1.7 1.2M9.8 7.3c.5.1 1 .2 1.5 0 .2-.1 0-.8.2-.9.1-.1.4-.2.4-.4 0-.3 0-1.1-.1-1.2-.2-.2-.8-.5-.6-.5.1-.1 2.1.6 2.2.9.1.4-.5.7-.5 1.1 0 .7-.1 1.4-.4 1.6-.5.2-.7.6-.5.9M4.5 8.2c.8.1.8 1.2.9 1.1.1-.2.7.1 1.3.6-.3.4-.7.7-1.1 1-.3.3-.6 1.5-.6 2M3.5 9.7c-.2-.5-.1-1.3 0-1.9.1-.4.6-.3.7-.6.1-.3-.8-.5-1-.6-.3-.3-.2-1.3 0-2M6.8 6.9C6.3 6.6 5.5 5.5 5.4 5c.3-.9-.4-1.3-.3-1.5 0-.2.4-.4.6-.5.3-.1 1-.1 1.3.1.8.6 1.2 2.1 1.5 2.3.1 0 .5.1.8 0">
        </path>
      </svg>              
    </svg>
    <svg rel="20T">
      <g  transform = "translate(0,35)">
        <svg rel="20G">
          <svg id="b5-surface" viewBox="-78 -110 16.8 390" class="width-height1"
          rel="20B">
            <path fill-rule="evenodd" clip-rule="evenodd" id="401" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-401'] ? '#fff000' : '' )}" @click="drawBox($event,401);"
            stroke="#939598" stroke-width=".283" d="M1.5 4.9c-.1-.8 0-1.6.1-2.3.2-.7.9-1.9 1.8-2.2C4.8 0 6.1.2 6.8.4c.5.2 1.1.9 1.5.9.4 0 .9-.5 1.5-.8.4-.2 1.9-.2 2.3 0 1.2.4 2.7 1.9 3.4 2.9.3.4.8 1.6 1 2.5.3 1.3.2 4.9-.3 6.1-.8 1.8-4.1 3.3-5.2 3.8-1.2.6-3.6.5-4.4.3-1.8-.4-4.5-2.4-5.2-3.5-.6-.9-.1-1.9-.3-2.3-.2-.3-.5-.7-.7-1C0 8.1.1 6.9.4 6.4c.4-.6 1-1 1.1-1.5z">
            </path>
            <path id="402" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-402'] ? '#fff000' : '' )}"
            @click="drawBox($event,402);" stroke="#939598" stroke-width=".216" d="M5.5 4.1c.7.3 1.3.2 1.7-.2.1-.5.1-1 .2-1.5 0-.1.1-.2.2-.3.1.2.2.3.2.5.1.4.2.8.3 1.1 0 .3.2.4.4.3.5.2.8 0 1-.3.2-.2.2-.1.4-.3 1.2-.1-.4 1 .2 1.3.4.1.8.2 1.3.3.5.1.9.2 1.4.1.5-.3 1.1-.4 1.5-.4 0 .3 0 .6-.1.8-.1.8-.5 1-1 1.2.4.4.7.8.8 1.3.1.6.1 1.1 0 1.7-.2.6-.5 1-.9 1.1-.6.2-1.1.6-2.1.7-1 0-1.8-.9-2.3-.5-.5.8-1 1.2-1.4 1-.4-.1-.6-.3-.6-.7 0-.4-.2-.6-.9-.7-.3-.1-.5-.2-.8-.2-.1-.3-.3-.7-.4-1 0-.6.5-.9 1-1 0-.7-1.5-1.1-1.3-1.9-.6-.7-.8-1.6-.1-3 .2-.1.4-.3.6-.4.4.3.6.6.7 1z">
            </path>
            <path id="403" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-403'] ? '#fff000' : '' )}"
            @click="drawBox($event,403);" stroke="#939598" stroke-width=".216" d="M5.5 4.1c0-.4-.5-.9-.8-1-.2-.1-.7.7-1.1.9-.7.5-1.4.4-2 .9M1.1 10.3c.7-.5 1.5-1.4 2.2-2.2.4-.3.7-1.5.9-1.6.3-.2 1.1.4 1.6.6.4.1 1 0 1.5-.3.5-.2 1.2-.6 1.5-.6.3 0 .7.8 1.1 1 .3.1 1.6-.2 2.3-.2.6 0 1.4-.4 1.6-.6.3-.3.4-1.3.4-1.6-.1-.2-1.3.4-1.9.4-.6 0-1.6-.3-2.4-.5M12.8 11c.8 0 1.1-1.1 1.2-1.6.1-.5.1-1-.1-1.5s-.3-.7-.7-1.1">
            </path>
            <path id="404" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-404'] ? '#fff000' : '' )}"
            @click="drawBox($event,404);" stroke="#939598" stroke-width=".216" d="M11.3 9.6c.1-.2 0-.6-.1-.9-.1-.4-1.1-1.4-1.3-1.4-.1 0-.7.9-.8 1.6M5.5 8.5c-.3 0-1 .5-1 .8 0 .3.4 1.2.6 1.3.2.1 1.3.1 1.4.3.2.2.3.8.4 1 .1.1.6.3.8.2.2-.1.7-1 1.1-1.1M7.2 3.9c0-.6.2-1.7.4-1.8.2.1.5 1.9.6 1.9.2.1.8.1.9 0 .2 0 .5-.5.8-.6">
            </path>
          </svg>
        </svg>
        <svg id="b5-crown" viewBox="-78 -140 17.2 390" class="width-height1" rel="20A">
          <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="435" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-435'] ? '#fff000' : '' )}" @click="drawBox($event,435);"
          stroke="#939598" stroke-width=".283" d="M.7 5.4c.3-2.8 3-2.9 4-3 .9-.5 1.6-1.2 2.5-2C8.2 0 8.9 0 9.6.3c1.9.7 2.7 2.3 3.4 2.6 1.5.2 3 .5 3.8 1.7.6.9.3 2.8-.7 4.4-2.4 3-3.5 7-4.1 8.1-2.2 1.5-5.2 1.9-7.6-.3-.5-1.2-.8-3-1.3-4.6-.9-2-2.1-3.4-2.4-4.3-.2-.8-.2-1.6 0-2.5z">
          </path>
          <path id="436" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-436'] ? '#fff000' : '' )}"
          @click="drawBox($event,436);" stroke="#939598" stroke-width=".216" d="M5.8 7.5c.5-1.6.2-5-1.1-5M11.2 7.3c-.1-1.5.5-4.2 1.8-4.4">
          </path>
        </svg>
        <svg id="b5-root" viewBox="-78 -155 9.3 390" class="width-height1" rel="20">
          <path rel="CR1" fill-rule="evenodd" clip-rule="evenodd" fill="#F2ECBE"
          stroke="#939598" stroke-width=".283" stroke-miterlimit="22.926" d="M1 .1c-1.5 6.7-1 15.2.5 20.8C4.8 33.4 7.1 31 7.2 24.2c0-1.2-.2-2.4-.2-3.9.3-3.9 3.5-6.4 1.6-19.9L5 .5 1 .1z">
          </path>
        </svg>
      </g>  
    </svg>
    <svg rel="14T">
      <svg rel="14G">
        <svg viewBox="-102 -10 18.2 390" id="t6-root" class="width-height1" rel="14">
          <path rel="CR1" fill-rule="evenodd" clip-rule="evenodd" fill="#D0C9A3"
          stroke="#A7A9AC" stroke-width=".283" stroke-miterlimit="22.926" d="M3.9 15l1.2-5.4c.7-.7 2.3-4.8 3.1-7.9C8.5.7 9.4.2 10 .2c1.3.1 1.6 2.4 1.6 3.3.1 3.2.1 6.4 1.5 9.8l-.7 7.2-6.3 1.1L3.9 15z">
          </path>
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#F2ECBE" stroke="#A7A9AC"
          stroke-width=".283" stroke-miterlimit="22.926" d="M4.3 29.2L2.2 29v-4.7c.1-3 .1-2.7-.8-5.4-.6-1.8-1-3.7-1.2-5.8-.2-3.3.2-5.6 1-8.8.4-1 1.4-2.6 3-3.1 1 .2 1.2 1.2 1.4 2.3L5 8.1c.1 1.5.5 2.9 1.2 4.2.9 1.8.9 1.5 1.2 3.5l.5 4.3c1.4 1.2 2.9-.7 4.5-4.2.3-1.2.5-1.9.8-2.6.9-2.2 1.2-3.1 1-4.8-.2-1.6 0-2.9 0-4.6 0-.2-.1-.5 0-.6 2.2-4.2 4.9 6.6 3.5 12.1-.4 3.9-1.5 6.3-2.3 9.5l-.1 4.8-7-2.5-4 2z">
          </path>
        </svg>
        <svg id="t6-crown" viewBox="-102 -30 20.5 390" class="width-height1" rel="14A">
          <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="288" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-288'] ? '#fff000' : '' )}" @click="drawBox($event,288);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M2.8 3.1l-.4 1.1-.1 1.4C2.1 7.5 2 7.4 1.1 9c-.8 1.4-1 1.4-1 3 .1 1.8.1 2 1.3 3.4.6.8 1.2 1.3 1.6 1.4h2.9c1.1 1.6 2.4 2.7 4.3 1.1.5-.4.7-.7 1.6-1.8l1.7.7c1.3.5 2.1.7 3.3.6.6-.1 1.7-.7 2.2-1.8.4-.9.8-1.8 1.1-2.9.3-1 .3-1.5.1-2.5-.1-1-.4-2.3-.9-3.1l-.3-.8-.8-2.2c-.4-.9-1-1.3-1.7-1.7L12.3.9c-.6-.2-1.1-.8-1.7-.8-.8 0-1.6 0-2.3.5-1.3.9-1.9 1.2-2.7 1.5-.4.2-2.4 0-2.8 1z">
          </path>
          <path id="289" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-289'] ? '#fff000' : '' )}"
          @click="drawBox($event,289);" stroke="#939598" stroke-width=".216" d="M5.9 16.8l2.5-1.1c.2-.1.6-.2.9-.5 2.3-1.8.2-4.8-.9-5.9">
          </path>
          <path id="290" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-290'] ? '#fff000' : '' )}"
          @click="drawBox($event,290);" stroke="#939598" stroke-width=".216" d="M11.8 16c-1.1-1.3-2.1-4-1.3-5.6.6-1.2 1.1-2.6 2.4-3.5">
          </path>
        </svg>
        <svg id="t4-crown" viewBox="124 -32 16.7 390" class="width-height1" rel="14A">
            <g transform="rotate(180) translate(-244,-75)">      
              <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="288" fill="#FFFFFF"
              style="fill:#{(soapNoteForm.dentalMap['A-288'] ? '#fff000' : '' )}" @click="drawBox($event,288);"
              stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M2.8 3.1l-.4 1.1-.1 1.4C2.1 7.5 2 7.4 1.1 9c-.8 1.4-1 1.4-1 3 .1 1.8.1 2 1.3 3.4.6.8 1.2 1.3 1.6 1.4h2.9c1.1 1.6 2.4 2.7 4.3 1.1.5-.4.7-.7 1.6-1.8l1.7.7c1.3.5 2.1.7 3.3.6.6-.1 1.7-.7 2.2-1.8.4-.9.8-1.8 1.1-2.9.3-1 .3-1.5.1-2.5-.1-1-.4-2.3-.9-3.1l-.3-.8-.8-2.2c-.4-.9-1-1.3-1.7-1.7L12.3.9c-.6-.2-1.1-.8-1.7-.8-.8 0-1.6 0-2.3.5-1.3.9-1.9 1.2-2.7 1.5-.4.2-2.4 0-2.8 1z">
              </path>
              <path id="289" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-289'] ? '#fff000' : '' )}"
              @click="drawBox($event,289);" stroke="#939598" stroke-width=".216" d="M5.9 16.8l2.5-1.1c.2-.1.6-.2.9-.5 2.3-1.8.2-4.8-.9-5.9">
              </path>
              <path id="290" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-290'] ? '#fff000' : '' )}"
              @click="drawBox($event,290);" stroke="#939598" stroke-width=".216" d="M11.8 16c-1.1-1.3-2.1-4-1.3-5.6.6-1.2 1.1-2.6 2.4-3.5">
              </path>
            </g>
        </svg>         
      </svg>
      <svg id="t6-surface" viewBox="-102 -57 22.7 390" class="width-height1"
      rel="14B">
        <path fill-rule="evenodd" clip-rule="evenodd" id="601" fill="#FFFFFF"
        style="fill:#{(soapNoteForm.dentalMap['A-601'] ? '#fff000' : '' )}" @click="drawBox($event,601);"
        stroke="#939598" stroke-width=".283" d="M1.7 12.9c-.1-.3-1-1.3-1.2-1.7-.3-.4-.6-6.4 0-7C2.8 1.8 5.2.7 5.9.4c1-.4 3.3-.4 4.7-.1 6.6 1.3 10.9 4 11.8 7.8.3 1.4.2 4.4-.1 6.7-.2 1.9-.9 3.2-1.9 4.6-.7 1.1-1.8 2.2-2.6 2.5-.7.3-2.4.3-3.4.3-.5-.1-2-1.6-2.4-1.6-.3-.1-1.6.5-2.4.8-.6.2-1.7.2-2.3 0-1-.2-2.6-1-3.8-2.3-1.3-1.5-2.1-3.6-2.1-4.2-.1-.4.3-1.6.3-2z">
        </path>
        <path id="344" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-344'] ? '#fff000' : '' )}"
        @click="drawBox($event,344);" stroke="#939598" stroke-width=".216" d="M20.7 13.7c-.8 0-.9-.4-1.6-.5-.6-.1-1.2 0-1.7.1-.3.1-.6.6-.9.6-.3-.1-.3-.8-.9-1.1-.4-.2-.6-.8-1-.8s-1.3.6-1.7.6c-.4-.1-.9-.7-1.4-.8-.4 0-1.1-.3-1.4-.3-.4 0-1.3.5-1.9.6-.6 0-1.3-.1-1.7.1-.4.1-.7.5-1 .5-.4 0-.9 0-1.1-.1M17.7 6.7c.6-.4 1.3.6 1.4.9.3.6-.1 1.1-.3 1.4-.8 1-1.6 3-2 3-.3 0-1.7-1-2.3-1.7">
        </path>
        <path id="345" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-345'] ? '#fff000' : '' )}"
        @click="drawBox($event,345);" stroke="#939598" stroke-width=".216" d="M15.6 5.9c-.7-.4-1.9.1-2 .3-.1.2-.7.8-.8 1.3-.1.6.2 1.2.3 1.4.2.3 1.2 1 1.4 1.4 0 .3-1.1 1-1.5 2.2 0 .5.7.5.6.9-.2.8-.8 1.7-1.2 1.8-.5.2-1.1 1.5-2 1.5M7.8 5.4c1-.7 2.1.9 2.5 1.8l.6 1.5c.5 1.2 0 2 .6 3M.2 8.6c.8.4 2 1.2 2.7 1.6.4.2.4 1.7 1.9 2.5-.3 0-.7 0-.9.1 0 1.9-.7 1.3-.8 1.8 0 .2-.1 1.4.1 1.5.2.1.4.2.7.1M3.7 4.9c.5 0 1 0 1.5.5.3.3.4 1 .4 1.4 0 .5.1 2-.2 2.7M11.7 20.7c1.2-.7 3-2.5 4.2-4.4.2-.4.4-.9.5-1.3 0-.4 0-.8.1-1.1">
        </path>
      </svg>
    </svg>
    <svg rel="19T">
      <g  transform = "translate(0,35)">
        <svg rel="19G">
          <svg id="b6-surface" viewBox="-102 -110 21.8 390" class="width-height1"
          rel="19B">
            <path fill-rule="evenodd" clip-rule="evenodd" id="405" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-405'] ? '#fff000' : '' )}" @click="drawBox($event,405);"
            stroke="#939598" stroke-width=".283" d="M19.8 7.5c-.2-.5.3-2.8 0-3.5-1.3-1.9-4-3.7-6.4-3.6-.5 0-1.5.8-1.9.8-.4 0-1.2-.6-1.6-.8C9 .1 6.7.1 6.1.3 5.1.7 2.9 2.2 1.9 4c-.4.5-.7 2.3-.7 3.2 0 .5-.8 1.8-.8 2.3-.2.6-.3 2-.1 2.7.3.7 1.7 1.6 2.5 2.2.4.3 1.1 1.4 1.5 2 2.1 2.2 3.9 1.6 4.4 1.8.9.4 2.1.9 4 .8 1.8.1 2.3-.5 2.7-.5 1.2-.5 2.6-.5 3.1-.7 1.7-.6 2.3-2.4 2.5-2.7.7-1 .7-4.2.5-5-.1-.6-1.5-2-1.7-2.6z">
            </path>
            <path id="406" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-406'] ? '#fff000' : '' )}"
            @click="drawBox($event,406);" stroke="#939598" stroke-width=".216" d="M4.5 8c-.4.6-.5 1.3-.7 1.9.2.2.4.4.7.6 0 .3-.1.6-.1.9 0 .1 0 .3.1.4h1.1v.5h1.5c.5-.1 1-.1 1.5-.2.1-.1.4-.1.7-.1.4 0 .8 0 1.1.1.7.3 1.4.7 2.1 1 .2 0 .4.1.6.1.2-.1.4-.2.5-.3.4-.1.8-.1 1.3-.2.9-1 .6-1.8.1-3-.2-.3-.5-.6-1-.7 0-.6 0-1.2-.3-1.7-.3-.3-.8-.3-1.5-.3 0-.2 0-.5.1-.7-.2.1-.5.1-.7.2l-1.8-.3c-.6.3-1.1.5-1.7.8-.4 0-.8-.1-1.2-.1-.4.1-1.4 0-2.4 1.1z">
            </path>
            <path id="407" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-407'] ? '#fff000' : '' )}"
            @click="drawBox($event,407);" stroke="#939598" stroke-width=".216" d="M3.8 9.9c0 .4.6.4.7.6 0 .5-.2 1.2 0 1.3.3.1.9-.1 1.1 0 .1.2-.2.4 0 .5.4.1 2.2 0 2.9-.2M1.2 6.5c.3.3.5.9.8 1 .5 0 .3-1.3.4-1.4.2-.1.6.1.8 0 .2-.1 0-.4.1-.5.2-.1 1.8-.1 2.1-.1.2 0 .4.4.3.7M6.9 9.5c-.3-.9-.4-2.3-.1-2.5.4-.3 1.1.1 1.4 0 .4-.2.9-.6 1.6-.8.8-.1 1.2.7 2.5.1 0 .4-.2.7-.2 1-.1.4-.2.8-.4 1.1-.4.3-.8.9-1 1.4-.2.6-.9 1.3-1.7 1.6">
            </path>
            <path id="408" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-408'] ? '#fff000' : '' )}"
            @click="drawBox($event,408);" stroke="#939598" stroke-width=".216" d="M8.7 3.1c-.1.5-.1 1.2 0 1.3.2.1.3.1.4.2.3.2-.1.9.2 1.1l.5.5M14.1 3.5c-.1.3-.4.6-.6.7-.2 0-.2.7-.4 1.1-.1.2-.4.3-.5.4-.2.2-.3.5-.3.7M12.2 7c.4-.1.8-.1 1.2.1.4.1.6.7.5.9 0 .3-.1.8 0 1 .1.2.5.2.7.3.2.1.3.5.4.8M17.4 5.5c-.5.3-.6.9-1.2.9-.4 0-.9.4-.8.6.1.3.4 0 .8.3.3.3.5.6.7.8.4.3.4 1.1.8 1.3.3.2 0 .7.2 1 .2.2.4.2.5.4.1.2 0 1.5-.1 1.8-.1.2-.6.3-.5.5M11.7 8.4c.3.4.2 1.5.8 1.8.5.4.3.8 1.4 1.9.3.1 1 .4 1 .7 0 .2-.6 0-1 .1s-.5.4-.8.4c-.2 0-.8-.2-1.1-.4-.5-.3-1-.7-1.5-.8">
            </path>
          </svg>
        </svg>
        <svg id="b6-crown" viewBox="-102 -140 21 390" class="width-height1" rel="19A">
          <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="437" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-437'] ? '#fff000' : '' )}" @click="drawBox($event,437);"
          stroke="#939598" stroke-width=".283" d="M.5 3.1c-.6 3.5-.3 6 .2 9.2.1.6.4 1.5.7 1.9 2.4 2.9 7.6 2 11.4 1.8 1.2-.1 3.3.4 3.6 0 1.3-1.4 3.4-4.4 3.8-5.4.8-1.6.8-4.5.4-5.7-.7-1.6-2.3-1.9-3.6-1.2-.2-.6-.8-2.5-2.4-2.9-2.8-.4-4.5 2.3-4.7 2.1C9.3 2.4 6.5.3 4.6.2 2.2-.2.8 1.8.5 3.1z">
          </path>
          <path id="438" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-438'] ? '#fff000' : '' )}"
          @click="drawBox($event,438);" stroke="#939598" stroke-width=".216" d="M9.7 2.8c1.3.9 1 4 .7 5.9M17 3.7c.3.7.2 2.8-.3 4.2">
          </path>
        </svg>
        <svg viewBox="-102 -155 17.9 390" id="b6-root" class="width-height1" rel="19">
          <path rel="CR1" fill-rule="evenodd" clip-rule="evenodd" fill="#F2ECBE"
          stroke="#939598" stroke-width=".283" stroke-miterlimit="22.926" d="M14.5.1l3 2.6c.5 2.7 0 6.4-.1 7.7-.2 1.7-.6 3.4-.6 5-.5 8.1-1 10.6-2.1 10.9-1.2.6-2.1-1.8-2.4-2.8-.4-1.1-.8-4.3-.9-5.7-.4-4.8-.4-8.8-.9-9C8.9 8 8 10.6 6.9 13.5c-.7 1.9-1 3.8-1 5.3 0 .6-.1 4.9-.5 6.1C3.8 29.3.9 23.8.3 17.7-.1 14.3.2 7.4 1 4.3 1.3 3 2.1 1.8 2.7.5L14.5.1z">
          </path>
        </svg>
      </g>  
    </svg>
    <svg rel="15T">
      <svg rel="15G">
        <svg viewBox="-128 -10 14.5 390" id="t7-root" class="width-height1" rel="15">
          <path rel="CR1" fill-rule="evenodd" clip-rule="evenodd" fill="#D0C9A3"
          stroke="#A7A9AC" stroke-width=".283" stroke-miterlimit="22.926" d="M1.9 15.1l3.4-5.9c1.4-1.3.4-9 3.4-9.1 1.5 0 .8 3.2.9 4.1.1 3.2.1 5.8 1.5 9.2L11 24.3l-7.2 1-1.9-10.2z">
          </path>
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#F2ECBE" stroke="#A7A9AC"
          stroke-width=".283" stroke-miterlimit="22.926" d="M2.9 31c-.5.2-1.5-1.2-2-1-.5-1.5-.9-3.3-.7-5.5C.6 17.9 1.2 13 3 8.1c.5-1.4 3-6.4 4.9-5.4.5 1.3-1.4 3.5-1.8 15.2-.2 2.8.7 6 1.6 5.8 1.4-.3 1.8-3.6 1.9-8.2 0-1.8-.6-7.4-.6-7.9-.7-4.6 1.8-1.5 1.9-1.5 5 5 3.6 16.3 2.3 23.3l-6.4.4L2.9 31z">
          </path>
        </svg>
        <svg id="t7-crown" viewBox="-128 -32 20.1 390" class="width-height1" rel="15A">
          <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="291" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-291'] ? '#fff000' : '' )}" @click="drawBox($event,291);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M.2 11.7c-.5 1.7 3.1 4.3 5.7 4.8 2.7 0 4-2.5 4.5-3.4.7 1.4 2.8 2.7 6.2 2.5 1.7-.3 3.9-1.7 3.3-5.6-.4-2.5-1.5-8.3-7.5-9.9C9 .3 8 3.3 5.6 2.6c-1.4-.4-1.6.2-1.7.5C3 5.5.4 7.9.2 11.7z">
          </path>
          <path id="292" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-292'] ? '#fff000' : '' )}"
          @click="drawBox($event,292);" stroke="#939598" stroke-width=".216" d="M10.4 13.1c.5-1.6-.1-3.5-1.5-4.9M10.5 11c.2-2.4 1-4.1 2.7-4.8">
          </path>
        </svg>
        <svg id="t7-crown" viewBox="124 -32 16.7 390" class="width-height1" rel="15A">
            <g transform="rotate(180) translate(-270,-75)">  
              <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="291" fill="#FFFFFF"
              style="fill:#{(soapNoteForm.dentalMap['A-291'] ? '#fff000' : '' )}" @click="drawBox($event,291);"
              stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M.2 11.7c-.5 1.7 3.1 4.3 5.7 4.8 2.7 0 4-2.5 4.5-3.4.7 1.4 2.8 2.7 6.2 2.5 1.7-.3 3.9-1.7 3.3-5.6-.4-2.5-1.5-8.3-7.5-9.9C9 .3 8 3.3 5.6 2.6c-1.4-.4-1.6.2-1.7.5C3 5.5.4 7.9.2 11.7z">
              </path>
              <path id="292" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-292'] ? '#fff000' : '' )}"
              @click="drawBox($event,292);" stroke="#939598" stroke-width=".216" d="M10.4 13.1c.5-1.6-.1-3.5-1.5-4.9M10.5 11c.2-2.4 1-4.1 2.7-4.8">
              </path>           
            </g>
        </svg>            
      </svg>
      <svg id="t7-surface" viewBox="-128 -57 20.1 390" class="width-height1"
      rel="15B">
        <path fill-rule="evenodd" clip-rule="evenodd" id="346" fill="#FFFFFF"
        style="fill:#{(soapNoteForm.dentalMap['A-346'] ? '#fff000' : '' )}" @click="drawBox($event,346);"
        stroke="#939598" stroke-width=".283" d="M1.7 12.4c-.1-.3-1.1-.5-1.4-1.6-.1-.8-.2-1.6 0-2.6.5-2.5 1.3-4.6 6-7.8.8-.5 2.7-.3 3.8.3 5.8 3.1 6 3.1 9.5 8.7.5 1.1.6 7 .1 8.1-.9 2.8-2.5 5.2-5.4 5.6-.3 0-.5.5-.8.6-.6.3-1.8.5-2.2.2-.3-.3-1.1-.6-1.4-.6-.3.1-.6.3-.9.3-1 .4-2.6.2-3.3-.3-.9-.6-3-1.9-4.7-5.1-.3-.8-.4-2.2-.3-3.3.1-.8.5-1.6 1-2.5z">
        </path>
        <path id="347" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-347'] ? '#fff000' : '' )}"
        @click="drawBox($event,347);" stroke="#939598" stroke-width=".216" d="M12.5 14c.2-.3 0-.6-.1-.9-.1-.1.9-.9 1.3-.8.6 0 .1 2.8.6 3.1.4.3.7.6.7 1-.1.6-2 5.6-5.3 7">
        </path>
        <path id="348" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-348'] ? '#fff000' : '' )}"
        @click="drawBox($event,348);" stroke="#939598" stroke-width=".216" d="M1.6 12.3c.4.3 1.9-.2 2.1.3.3.4 1 2.5 1.5 2.6.6-.1 1.7-2.1 2.1-2.2.6-.1.7-.4 1.1-.5 1-.2 2.1-.2 2.4-.1.4.3.5.8.4 1.3.1.4.9 0 1.3.3.5.5 1 1.3 1.4 1.5.4.2 1.5-.2 2.1.4.7.3 2-1.6 2.4-1.6.4-.1 1.1 0 1.5-.1M.3 10.8c0-1.4 1-2.8 1.3-2.7.2.1-.3 1.6 0 2.2">
        </path>
        <path id="349" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-349'] ? '#fff000' : '' )}"
        @click="drawBox($event,349);" stroke="#939598" stroke-width=".216" d="M5.8 17.2c.1-.4.1-1 0-1.4-.1-.3-.3-.4-.6-.6M4.4 7.8c.4 1.2-.1 2.2 0 2.9.1.5 1.5 1.9 2.9 2.3M8 8c.6.3 1.2.5 1.2.9s.8 1.9.7 2.4c-.1.5-.7.7-.7 1.2M12.5 8.2c-.2 1.3-1.4 2.2-1.4 2.8.1.5-.3 1-.2 1.4.5.4.5.9.4 1.3-.3.3-.5.6-.3 1s.7.9.7 1.2c0 .3-.3.7-.5.8-.3.1-.7.4-.9.7M17.4 15.2c-.1-.4-.2-1-.5-1.3-.2-.2 0-.7-.1-1.1-.1-.2-.5-.2-.6-.5.1-.4.4-.6.8-.8">
        </path>
      </svg>
    </svg>
    <svg rel="18T">
      <g  transform = "translate(0,35)">
        <svg rel="18G">
          <svg id="b7-surface" viewBox="-128 -110 22.5 390" class="width-height1"
          rel="18B">
            <path fill-rule="evenodd" clip-rule="evenodd" id="409" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-409'] ? '#fff000' : '' )}" @click="drawBox($event,409);"
            stroke="#939598" stroke-width=".283" d="M20.7 7.4c.3-.5.6-.8.7-1.3.1-.7.1-2-.1-2.7-.2-.8-.9-1.7-1.8-2.2-1.2-.6-2.2-.6-3.1-.1-.3.1-.4.5-.6.6-.5 0-.6-.7-1.2-.8-1-.2-1.2-.8-1.9-.7-.6 0-1.2.5-1.4.7-.3.3-.3.7-.6.8-.3 0-.5-.4-.7-.6C9.8.8 9 .3 8.3.3c-.6-.1-.9.3-1.4.3-.4 0-2.5 0-2.9.3-.7.4-1.5 1-1.9 2.5-.1 1.1-.7 1.2-.6 2.4 0 1.1.5 1 .5 1.3C2 7.4.7 7.9.3 9.3c-.3 1.1-.2 2.6 0 3.3.2.7.7 1.7 1.2 2.4.8 1.1 1.8 2 2.6 2.5.7.3 1.7.4 2.4.6.5.1 2.7 1.2 3.8 1.5 1.5.3 3.2.3 4.7 0 1-.2 2 0 3-.3 1.4-.4 3.7-4.7 4.1-5.6.4-1.1.3-2.7-.1-3.3-.3-.5-.3-2.1-1.3-3z">
            </path>
            <path id="410" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-410'] ? '#fff000' : '' )}"
            @click="drawBox($event,410);" stroke="#939598" stroke-width=".216" d="M4.6 4.4c.2.9.4 1.6.9 2.1.6.9 1.5 1.1 2.3 1.3.8.1 1.3-.2 2-.6.7-.1 1.3-.2 2-.3 1.4-.2 2.4-.2 3.2 0 1 .2 1.9.6 2.9 1.2.9.7 1.6 1.5 2.3 2.2.2.5.1 1-.5 1.4-.4.3-1.1.3-1.5.2-.6.2-1.5.1-2.1-.1-.3.5-.6.8-1.5 1-.6.1-1.1 0-1.4-.2-.8-.7-.9-.8-1.4-.5-.4.2-.7.4-1.1.6-.8.1-1.5 0-2.1-.2l-2.4-.3c-.2-.1-.4 0-.6-.1-1-.2-2-.6-2.3-1.1-.5-.5-.8-1.1-.7-1.8.3-1.1 1-1.7 1.6-2.1-.3-1-.2-1.9.4-2.7z">
            </path>
            <path id="411" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-411'] ? '#fff000' : '' )}"
            @click="drawBox($event,411);" stroke="#939598" stroke-width=".216" d="M20.1 10.4c-.8-1.1-2.1-2.2-2.9-2.6-.5-.2-1-.5-1.6-.6-2.1-.6-2.9-.4-4.3-.1-.3.1-1.1 0-1.5.2-.7.2-.8.6-1.4.6-.5 0-.9 0-1.3-.3-1-.3-1.6-.9-2.1-1.8-.2-.4-.2-1.3-.4-1.4-.4.1-.8 1.2-.5 2.9 0 .3-.9.5-1.5 1.6-.1.4-.2.7-.2 1 0 .3.4.9.7 1.3">
            </path>
            <path id="412" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-412'] ? '#fff000' : '' )}"
            @click="drawBox($event,412);" stroke="#939598" stroke-width=".216" d="M20.7 7.4c-.8-.2-1.7-.2-2.1-.1-.5.1-.9.5-1.4.6M15.4 9.1c.3.3.6.7.7 1.2.1.5 0 1.1-.1 1.6-.2.3-.5.7-.8.8-.2.1-1.1.4-1.3.3-.2-.1-1-.4-1.3-.8M18.1 12c-.8.1-1.5.1-2.1-.1M13 9.4c-.5.6-1.2 1.2-1.3 1.4-.1.4.2 1.3.1 1.5-.2.2-1.1.7-1.6.8-.5 0-2.8-.6-3.2-.6-.5-.1-1.3.1-1.5-.2-.1-.2.1-.7.1-1.2 0-.4-.2-1.2.1-1.3.6-.2.3-1.8 1.4-2.2">
            </path>
            <path id="413" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-413'] ? '#fff000' : '' )}"
            @click="drawBox($event,413);" stroke="#939598" stroke-width=".216" d="M9.8 9c0 .5-.6 1-.8 1.3-.5.7.1 1.9-.4 2.5">
            </path>
          </svg>
        </svg>
        <svg id="b7-crown" viewBox="-128 -140 21.2 390" class="width-height1"
        rel="18A">
          <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="439" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-439'] ? '#fff000' : '' )}" @click="drawBox($event,439);"
          stroke="#939598" stroke-width=".283" d="M9.6 4.3c1.4-1.2 2.5-3 3.8-3.8C17-1.2 20.1 4 20.8 6.1c.8 3.1-.6 7.4-1.6 9.2-.5.6-2.3.2-3.8.2-2 .2-3.5 1.7-5.2 1.8-.9 0-3.8-.5-6-2.1C2.8 14.4.7 8.7.4 8.1-.7 5.5 2.8 2.2 3.8 1.3c.6-.3 1.3-.2 1.9 0 1.5.8 3.1 1.9 3.9 3z">
          </path>
          <path id="440" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-440'] ? '#fff000' : '' )}"
          @click="drawBox($event,440);" stroke="#939598" stroke-width=".216" d="M10.9 8.6c.1-1.5-.5-3.2-1.3-4.2M13.8 9.3c-.5-.3-3.1-1.6-4.9.2">
          </path>
        </svg>
        <svg id="b7-root" viewBox="-128 -155 16.4 390" class="width-height1" rel="18">
          <path rel="CR1" fill-rule="evenodd" clip-rule="evenodd" fill="#F2ECBE"
          stroke="#939598" stroke-width=".283" stroke-miterlimit="22.926" d="M12.8.1l2.6 1.5c.8 4.7 1.1 9.5.8 14.3-.5 8.2-1.1 10.9-2.2 11.1-1.7.1-2.4-5.1-2.6-6.2-.1-2.1-1.8-4.8-1.9-5.5-.3-1-.3-5-1.4-5.2-.4.5-1.9 4.2-.5 10.3.3 1.2 2.5 7.9 1.6 8.3C5.7 30.3.4 14.8.3 11.3 0 9.4.1 2.9.7 1.5L12.8.1z">
          </path>
        </svg>
      </g>  
    </svg>
    <svg rel="16T">
      <svg rel="16G">
        <svg viewBox="-155 -10 13.6 390" id="t8-root" class="width-height1" rel="16">
          <path rel="CR1" fill-rule="evenodd" clip-rule="evenodd" fill="#D0C9A3"
          stroke="#A7A9AC" stroke-width=".283" stroke-miterlimit="22.926" d="M5.5 10.1c1.4-1.4.4-9 3.5-9.1 1.5 0 .8 3.2.9 4.1V9l-4.4 1.1z">
          </path>
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#F2ECBE" stroke="#A7A9AC"
          stroke-width=".283" stroke-miterlimit="22.926" d="M1.2 26.1c-.5-1.5-.9-3.1-1-5.5C-.4 10.4 3.7 8.8 5.1 4.9 6.2 0 7.7-.3 8.1.3c.8.8-.2 6.4.4 6.6.1-1.3.3-2.9.7-4.2.7-2.4 2.1-1.7 2 .1 0 1.1.8 3.3 1 4 1.5 5.5 1.9 13.1.5 17.2l-5.6 2c-1.7.5-5.2-.1-5.9.1z">
          </path>
        </svg>
        <svg id="t8-crown" viewBox="-155 -32 18.5 390" class="width-height1" rel="16A">
          <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="293" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-293'] ? '#fff000' : '' )}" @click="drawBox($event,293);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M.4 8.2C.3 8.8.3 9.3.3 9.6c0 1.1.1 1.6.3 1.9 0 0 .1.2.2.3.8 1.6 2.3 2.2 2.7 2.3 1.1.3 2.3.2 3.5-.3 1.1.5 3.4 1.3 5.5-.4.6.4 1.3.8 2.1.8.3 0 .9 0 1.6-.3 1.3-.6 1.7-2 2-2.9.3-.9.3-1.7.3-2.2 0-.1 0-1.1-.3-2.2-.5-2.4-2.1-4.4-2.6-5-1.1-.1-2.5 0-3.1-.4C12 1 11.7 0 10.9 0 9.7 0 8.5 1.2 7.8 1.5c-1.8.7-3.7.2-4.3.6C1.6 3.4.8 6.2.4 8.2z">
          </path>
          <path id="294" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-294'] ? '#fff000' : '' )}"
          @click="drawBox($event,294);" stroke="#939598" stroke-width=".216" d="M6.8 13.9c2-1.8 4.2-4.4-.7-8M12.3 13.5c-2.8-1.5-5.2-4 .5-8">
          </path>
        </svg>
        <svg id="t7-crown" viewBox="124 -32 16.7 390" class="width-height1" rel="16A">
            <g transform="rotate(180) translate(-295,-75)">    
              <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="293" fill="#FFFFFF"
              style="fill:#{(soapNoteForm.dentalMap['A-293'] ? '#fff000' : '' )}" @click="drawBox($event,293);"
              stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M.4 8.2C.3 8.8.3 9.3.3 9.6c0 1.1.1 1.6.3 1.9 0 0 .1.2.2.3.8 1.6 2.3 2.2 2.7 2.3 1.1.3 2.3.2 3.5-.3 1.1.5 3.4 1.3 5.5-.4.6.4 1.3.8 2.1.8.3 0 .9 0 1.6-.3 1.3-.6 1.7-2 2-2.9.3-.9.3-1.7.3-2.2 0-.1 0-1.1-.3-2.2-.5-2.4-2.1-4.4-2.6-5-1.1-.1-2.5 0-3.1-.4C12 1 11.7 0 10.9 0 9.7 0 8.5 1.2 7.8 1.5c-1.8.7-3.7.2-4.3.6C1.6 3.4.8 6.2.4 8.2z">
              </path>
              <path id="294" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-294'] ? '#fff000' : '' )}"
              @click="drawBox($event,294);" stroke="#939598" stroke-width=".216" d="M6.8 13.9c2-1.8 4.2-4.4-.7-8M12.3 13.5c-2.8-1.5-5.2-4 .5-8">
              </path>         
           </g>     
        </svg>          
      </svg>
      <svg id="t8-surface" viewBox="-155 -57 21 390" class="width-height1" rel="16B">
        <path fill-rule="evenodd" clip-rule="evenodd" id="350" fill="#FFFFFF"
        style="fill:#{(soapNoteForm.dentalMap['A-350'] ? '#fff000' : '' )}" @click="drawBox($event,350);"
        stroke="#939598" stroke-width=".283" d="M2.7 13.2c-.4-.8-2-2-2.4-3-.2-.7-.2-1.7 0-2.7C1 3.7 3.5 2.2 5.1 1 6.4.2 7.5-.1 8.8.5c1.6.7 4 3.1 5 3.1.9 0 1.8.1 2.7.2.9.1 1.5.3 2.1.7.8.4 1.5 1.4 2.1 2.2.3.3.2 1.9-.2 2.8-.6 1.5-1.7 2.5-1.9 2.9-.1.2 0 .8.3 1.2.3.6.2 1.9-.1 2.5-.5 1.1-3.8 3.6-6 4.4-1.2.6-3.2.8-4.1.2-1.3-1.2-6.5-1.1-6.2-5.5 0-.6.2-1.5.2-2z">
        </path>
        <path id="351" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-351'] ? '#fff000' : '' )}"
        @click="drawBox($event,351);" stroke="#939598" stroke-width=".216" d="M4.8 12.2c-.7-.9-1.5-1.7-2.2-2.6-.8-1.1.3-1.6.1-3 .2-.9 1-1.3 2.2-1.2 1.5-.4 1.9.5 2.5.6.3.7.1 1.6.2 2.4 0 1.7 1.5 1.3 2.4 1.3 2.2-.6.7-2.1 1.8-2.9-.1-.5 0-.8.2-1 .8-.2 1-.4 1.8-.3.4.1 1.2.3 1.3.7 0 1.2-.1 2.3-.1 3.5.4.4 1.2.6 1.3 1.1.1.5-.3 1.3-.5 1.9l-.3.9c-.8-.6-.9-2.1-2.3-1.7-.5.1-.8.5-1.3.6-.4.1-.9-.2-1.3-.2-.6 0-1.3.2-1.9.3-.6.2-1 .7-1.3 1.3-.3.7-.4 1.4-1.4 1.6-.5 0-.9-.1-1-.9.2-.6.2-.8.6-1.1.2-.6 0-1-.8-1.3z">
        </path>
        <path id="352" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-352'] ? '#fff000' : '' )}"
        @click="drawBox($event,352);" stroke="#939598" stroke-width=".216" d="M2.7 13.2c1 0 2.1-.6 2.1-.9 0-.2-1.9-2.2-2.2-2.6-.4-.6-.4-1.3-.1-1.7.3-.3.3-1 .2-1.4M4.9 5.4c.5-.1 1.2-.1 1.5 0 .1 0 .3.3.6.5s.6 0 .7.4c.1.8.1 1.8 0 2.7M12.5 5.8c-.2-.1-.7.1-.8.3-.1.1.3.6 0 .9-.2.2-.4.4-.4.6 0 .6 0 1.5-.2 1.5-.3 0-.6.8-2.3.5M15.2 6.1c-.2 1.3-.3 3.9 0 4 .4.2 1 .1 1.2 0 .7-.5 1.1-.9 1.2-1.4M6.8 12.2c.7-.7 1.4-1.1 2.1-1.2.9 0 2.5.2 3 0 .8-.4 1.9-.5 2.5-.4M18.6 12.4c-.4-.1-1.1.1-1.3.1-.2 0-.8-.5-1-.5-.2 0-.5 1.8-.6 1.8-.1 0-1.1-1.5-1.3-1.7-.2-.2-.9-.1-1.3 0-.2 0-.4.3-.6.4-.2.1-.6.1-1 0-.3-.1-.9-.1-1.3 0">
        </path>
        <path id="353" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-353'] ? '#fff000' : '' )}"
        @click="drawBox($event,353);" stroke="#939598" stroke-width=".216" d="M11.9 14.7c-.2-.1-.5-.9-.6-1.3-.1-.3 0-.7.1-.9M5.8 13.7c-.3 0-.5.5-.6 1.1 0 .2.4.8.5.8.3 0 .8.1.9 0 .4-.4.8-1.1.9-1.6">
        </path>
      </svg>
    </svg>
    <svg rel="17T">
      <g  transform = "translate(0,35)">
        <svg rel="17G">
          <svg id="b8-surface" viewBox="-155 -110 22.5 390" class="width-height1"
          rel="17B">
            <path fill-rule="evenodd" clip-rule="evenodd" id="414" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-414'] ? '#fff000' : '' )}" @click="drawBox($event,414);"
            stroke="#939598" stroke-width=".283" d="M1.1 9.5c0-.5-.3-1.2-.4-1.9C.5 6.4.5 4.7.8 4.1c.6-1.3 1.9-3 3.5-3.5s4-.5 4.3-.4c.3.1.8 1 1 1.1.4 0 .8-.7 1.2-.8C12 0 14.6.1 15.2.3c2.3 1.1 4.5 3.3 5.2 4.6.3 1.1.2 3.4-.2 3.7.6.6 1.9 2.8 2.1 3.6.1.7.1 2-.1 2.6-1.7 3.8-3.5 4.6-5.6 5.6-1.3.3-3.5.2-4.3-.1-1.6-.4-5.7-.7-8.1-2-2-1.4-3.5-4.3-4-7.4-.1-.5.7-.9.9-1.4z">
            </path>
            <path id="415" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-415'] ? '#fff000' : '' )}"
            @click="drawBox($event,415);" stroke="#939598" stroke-width=".216" d="M5.3 9.6c-.5-.8-.1-2.4.7-2.5.7-.2 1.5-.1 1.9 0 .4-.4.9-.7 1.9-.7.7.3 1.3.7 2 1 .8.1 1.5-.1 2.3.2.7.3 1 1 1.6 1.2.6.2 1.1.4 1.7.6.3.5 1.1.8 1.5 1.7.1.3.3.6.4 1-.5.4-1.3 1.1-1.7 1.5-.4.6-.9 1-1.5 1.1-.9 0-1.9.1-2.8.1-.7-.1-1.3-.2-1.4-.5-.3-.4-.3-1.6-1-2.1-.5-.2-.4-.3-.9-.5-.4-.3-.8-.4-1.3-.4-.7-.3-1.2.4-1.7 1.2-.6.9-1.1 1.3-1.4 1.3-.6.1-.9-.1-1.1-1.6-.2-.3-.3-.6-.5-.9.1-.6.3-1 .6-1.4.1-.3.5-.1.7-.3z">
            </path>
            <path id="416" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-416'] ? '#fff000' : '' )}"
            @click="drawBox($event,416);" stroke="#939598" stroke-width=".216" d="M17.5 13.7c.3-.5 1.7-1.3 1.8-1.6 0-.2-.7-1.6-1.1-1.8-.3-.2-.7-.5-.8-.9M11.9 14.3c0 .2.4.4.8.5 1.2 0 2.4 0 3.5-.1">
            </path>
            <path id="417" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-417'] ? '#fff000' : '' )}"
            @click="drawBox($event,417);" stroke="#939598" stroke-width=".216" d="M20.2 8.6c-1-.4-1.7.8-2.8.9-.7-.2-1.6-.6-2.5-.9-.4-.2-1-.1-1.4.2-.4.3-1.3.2-2 .3.5 1.1.1 3.1-.3 3.3-.2.1-1.6-.8-2-1-.3-.1-1.1-.1-1.4 0-.3.1-1.8 2.2-2.1 2.4-.2.1-.5.1-.8 0M1.1 9.5c.8-.7 1.9-1.4 2.3-1.4.5 0 .7.9 1.1 1 .3 0 .8.3.8.4 0 .1-.7.2-.9.3-.2.2-.6 1-.6 1.4 0 .3.4.6.5.9M16.2 5.3c-.5.8-1.7 1.4-2.1 1.6-.4.2-1.8.5-2.3.5-.6-.1-1.1-.6-1.8-1-.4 0-.7-.1-1 0-.2.1-1.1.6-1.1.7 0 .3 1.8.4 3.6 1.9">
            </path>
            <path id="418" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-418'] ? '#fff000' : '' )}"
            @click="drawBox($event,418);" stroke="#939598" stroke-width=".216" d="M6.7 4.3c.6.8 1.5 1.8 2.4 2 .4 0 1-.1 1.3-.1 1.3-.3 2.3-.9 3.3-1.6">
            </path>
            <path id="419" fill="#FFFFFF" style="fill:#{(soapNoteForm.dentalMap['A-419'] ? '#fff000' : '' )}"
            @click="drawBox($event,419);" stroke="#939598" stroke-width=".216" d="M9.6 1.3c-.1.4-.2.9 0 1.4.2.4.6.6.8 1.2.1.6.2 1.3 0 1.6-.2.3-.6.7-1.1.9M15.5 2.8l1.7-1.4">
            </path>
          </svg>
        </svg>
        <svg id="b8-crown" viewBox="-155 -141 22.1 390" class="width-height1"
        rel="17A">
          <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="441" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-441'] ? '#fff000' : '' )}" @click="drawBox($event,441);"
          stroke="#939598" stroke-width=".283" d="M10.5 3.5c1.2-1.1 2.3-1.8 3.3-2.4 1-.5 2.3-.4 3.4.1 2.3 1.2 3.7 3.2 4.3 5.1.5 1.1.6 3 .2 4.2-.6 1.5-1.4 4.4-2.4 4.4-1.1-.3-1.8-.2-2.7 0-1.3.5-3.1.9-3.7.9-.8 0-2.6-.4-3.9-.8-.9-.3-2.8-.6-5.6.2-.7-.5-.6-1.3-.6-1.9 0-.8-.5-1.9-.9-2.4C1.1 10.1-.2 7 .2 5.2c.3-2 2.7-5.2 4.1-5 2-.1 4.3 1.8 6.2 3.3z">
          </path>
        </svg>
        <svg id="b8-root" viewBox="-155 -155 17.1 390" class="width-height1" rel="17">
          <path rel="CR1" fill-rule="evenodd" clip-rule="evenodd" fill="#F2ECBE"
          stroke="#939598" stroke-width=".283" stroke-miterlimit="22.926" d="M1 1.7C-.4 3.6.3 9.8.5 11.1 2 19 4.5 21.9 8.4 24.4c.5.4 2.1 1.3 3.6 1 .6-.2.9-1.2.8-2.1 0 0 .1 0 .1.1.3.8.6 1.4 1.1 1.4.6.2 1.1 0 1.5-.7.5-.5-.2-5.8.3-8.7.1-.8.6-1.7.8-2.3.3-.9.6-6.8.1-11.3-1.7-.5-3.3-1.1-5-1.6-3.7.5-7 1-10.7 1.5z">
          </path>
        </svg>
      </g>  
    </svg>
    <svg rel="AT">
      <g transform = "translate(0,55)">
        <svg rel="AG">
          <svg viewBox="147 -225 9.3 390" id="t7-root" class="width-height1" rel="A">
            <path rel="CR1" fill-rule="evenodd" clip-rule="evenodd" fill="#D0C9A3"
            stroke="#A7A9AC" stroke-width=".283" stroke-miterlimit="22.926" d="M1.9 15.1l3.4-5.9c1.4-1.3.4-9 3.4-9.1 1.5 0 .8 3.2.9 4.1.1 3.2.1 5.8 1.5 9.2L11 24.3l-7.2 1-1.9-10.2z">
            </path>
            <path fill-rule="evenodd" clip-rule="evenodd" fill="#F2ECBE" stroke="#A7A9AC"
            stroke-width=".283" stroke-miterlimit="22.926" d="M2.9 31c-.5.2-1.5-1.2-2-1-.5-1.5-.9-3.3-.7-5.5C.6 17.9 1.2 13 3 8.1c.5-1.4 3-6.4 4.9-5.4.5 1.3-1.4 3.5-1.8 15.2-.2 2.8.7 6 1.6 5.8 1.4-.3 1.8-3.6 1.9-8.2 0-1.8-.6-7.4-.6-7.9-.7-4.6 1.8-1.5 1.9-1.5 5 5 3.6 16.3 2.3 23.3l-6.4.4L2.9 31z">
            </path>
          </svg>
          <svg id="t7-crown" viewBox="150 -250 9.3 390" class="width-height1" rel="AA">
            <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="442" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-442'] ? '#fff000' : '' )}" @click="drawBox($event,442);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M.2 11.7c-.5 1.7 3.1 4.3 5.7 4.8 2.7 0 4-2.5 4.5-3.4.7 1.4 2.8 2.7 6.2 2.5 1.7-.3 3.9-1.7 3.3-5.6-.4-2.5-1.5-8.3-7.5-9.9C9 .3 8 3.3 5.6 2.6c-1.4-.4-1.6.2-1.7.5C3 5.5.4 7.9.2 11.7z">
            </path>
            <path fill-rule="evenodd" clip-rule="evenodd" id="443" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-443'] ? '#fff000' : '' )}" @click="drawBox($event,443);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M10.4 13.1c.5-1.6-.1-3.5-1.5-4.9M10.5 11c.2-2.4 1-4.1 2.7-4.8">
            </path>
          </svg>
        </svg>
        <svg id="t7-surface" viewBox="150 -270 9.3 390" class="width-height1"
        rel="AB">
          <path fill-rule="evenodd" clip-rule="evenodd" id="474" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-474'] ? '#fff000' : '' )}" @click="drawBox($event,474);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M1.7 12.4c-.1-.3-1.1-.5-1.4-1.6-.1-.8-.2-1.6 0-2.6.5-2.5 1.3-4.6 6-7.8.8-.5 2.7-.3 3.8.3 5.8 3.1 6 3.1 9.5 8.7.5 1.1.6 7 .1 8.1-.9 2.8-2.5 5.2-5.4 5.6-.3 0-.5.5-.8.6-.6.3-1.8.5-2.2.2-.3-.3-1.1-.6-1.4-.6-.3.1-.6.3-.9.3-1 .4-2.6.2-3.3-.3-.9-.6-3-1.9-4.7-5.1-.3-.8-.4-2.2-.3-3.3.1-.8.5-1.6 1-2.5z">
          </path>
          <path fill-rule="evenodd" clip-rule="evenodd" id="475" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-475'] ? '#fff000' : '' )}" @click="drawBox($event,475);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M12.5 14c.2-.3 0-.6-.1-.9-.1-.1.9-.9 1.3-.8.6 0 .1 2.8.6 3.1.4.3.7.6.7 1-.1.6-2 5.6-5.3 7">
          </path>
          <path fill-rule="evenodd" clip-rule="evenodd" id="476" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-476'] ? '#fff000' : '' )}" @click="drawBox($event,476);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M1.6 12.3c.4.3 1.9-.2 2.1.3.3.4 1 2.5 1.5 2.6.6-.1 1.7-2.1 2.1-2.2.6-.1.7-.4 1.1-.5 1-.2 2.1-.2 2.4-.1.4.3.5.8.4 1.3.1.4.9 0 1.3.3.5.5 1 1.3 1.4 1.5.4.2 1.5-.2 2.1.4.7.3 2-1.6 2.4-1.6.4-.1 1.1 0 1.5-.1M.3 10.8c0-1.4 1-2.8 1.3-2.7.2.1-.3 1.6 0 2.2">
          </path>
          <path fill-rule="evenodd" clip-rule="evenodd" id="477" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-477'] ? '#fff000' : '' )}" @click="drawBox($event,477);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M5.8 17.2c.1-.4.1-1 0-1.4-.1-.3-.3-.4-.6-.6M4.4 7.8c.4 1.2-.1 2.2 0 2.9.1.5 1.5 1.9 2.9 2.3M8 8c.6.3 1.2.5 1.2.9s.8 1.9.7 2.4c-.1.5-.7.7-.7 1.2M12.5 8.2c-.2 1.3-1.4 2.2-1.4 2.8.1.5-.3 1-.2 1.4.5.4.5.9.4 1.3-.3.3-.5.6-.3 1s.7.9.7 1.2c0 .3-.3.7-.5.8-.3.1-.7.4-.9.7M17.4 15.2c-.1-.4-.2-1-.5-1.3-.2-.2 0-.7-.1-1.1-.1-.2-.5-.2-.6-.5.1-.4.4-.6.8-.8">
          </path>
        </svg>
      </g>  
    </svg>
    <svg rel="TT">
      <g transform = "translate(0,55)">
        <svg rel="TG">
          <svg id="b7-surface" viewBox="150 -310 9.3 390" class="width-height1"
          rel="TB">
            <path fill-rule="evenodd" clip-rule="evenodd" id="512" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-512'] ? '#fff000' : '' )}" @click="drawBox($event,512);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M20.7 7.4c.3-.5.6-.8.7-1.3.1-.7.1-2-.1-2.7-.2-.8-.9-1.7-1.8-2.2-1.2-.6-2.2-.6-3.1-.1-.3.1-.4.5-.6.6-.5 0-.6-.7-1.2-.8-1-.2-1.2-.8-1.9-.7-.6 0-1.2.5-1.4.7-.3.3-.3.7-.6.8-.3 0-.5-.4-.7-.6C9.8.8 9 .3 8.3.3c-.6-.1-.9.3-1.4.3-.4 0-2.5 0-2.9.3-.7.4-1.5 1-1.9 2.5-.1 1.1-.7 1.2-.6 2.4 0 1.1.5 1 .5 1.3C2 7.4.7 7.9.3 9.3c-.3 1.1-.2 2.6 0 3.3.2.7.7 1.7 1.2 2.4.8 1.1 1.8 2 2.6 2.5.7.3 1.7.4 2.4.6.5.1 2.7 1.2 3.8 1.5 1.5.3 3.2.3 4.7 0 1-.2 2 0 3-.3 1.4-.4 3.7-4.7 4.1-5.6.4-1.1.3-2.7-.1-3.3-.3-.5-.3-2.1-1.3-3z">
            </path>
            <path fill-rule="evenodd" clip-rule="evenodd" id="513" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-513'] ? '#fff000' : '' )}" @click="drawBox($event,513);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M4.6 4.4c.2.9.4 1.6.9 2.1.6.9 1.5 1.1 2.3 1.3.8.1 1.3-.2 2-.6.7-.1 1.3-.2 2-.3 1.4-.2 2.4-.2 3.2 0 1 .2 1.9.6 2.9 1.2.9.7 1.6 1.5 2.3 2.2.2.5.1 1-.5 1.4-.4.3-1.1.3-1.5.2-.6.2-1.5.1-2.1-.1-.3.5-.6.8-1.5 1-.6.1-1.1 0-1.4-.2-.8-.7-.9-.8-1.4-.5-.4.2-.7.4-1.1.6-.8.1-1.5 0-2.1-.2l-2.4-.3c-.2-.1-.4 0-.6-.1-1-.2-2-.6-2.3-1.1-.5-.5-.8-1.1-.7-1.8.3-1.1 1-1.7 1.6-2.1-.3-1-.2-1.9.4-2.7z">
            </path>
            <path fill-rule="evenodd" clip-rule="evenodd" id="514" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-514'] ? '#fff000' : '' )}" @click="drawBox($event,514);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M20.1 10.4c-.8-1.1-2.1-2.2-2.9-2.6-.5-.2-1-.5-1.6-.6-2.1-.6-2.9-.4-4.3-.1-.3.1-1.1 0-1.5.2-.7.2-.8.6-1.4.6-.5 0-.9 0-1.3-.3-1-.3-1.6-.9-2.1-1.8-.2-.4-.2-1.3-.4-1.4-.4.1-.8 1.2-.5 2.9 0 .3-.9.5-1.5 1.6-.1.4-.2.7-.2 1 0 .3.4.9.7 1.3">
            </path>
            <path fill-rule="evenodd" clip-rule="evenodd" id="515" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-515'] ? '#fff000' : '' )}" @click="drawBox($event,515);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M20.7 7.4c-.8-.2-1.7-.2-2.1-.1-.5.1-.9.5-1.4.6M15.4 9.1c.3.3.6.7.7 1.2.1.5 0 1.1-.1 1.6-.2.3-.5.7-.8.8-.2.1-1.1.4-1.3.3-.2-.1-1-.4-1.3-.8M18.1 12c-.8.1-1.5.1-2.1-.1M13 9.4c-.5.6-1.2 1.2-1.3 1.4-.1.4.2 1.3.1 1.5-.2.2-1.1.7-1.6.8-.5 0-2.8-.6-3.2-.6-.5-.1-1.3.1-1.5-.2-.1-.2.1-.7.1-1.2 0-.4-.2-1.2.1-1.3.6-.2.3-1.8 1.4-2.2">
            </path>
            <path fill-rule="evenodd" clip-rule="evenodd" id="516" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-516'] ? '#fff000' : '' )}" @click="drawBox($event,516);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M9.8 9c0 .5-.6 1-.8 1.3-.5.7.1 1.9-.4 2.5">
            </path>
          </svg>
        </svg>
        <svg id="b7-crown" viewBox="152 -335 9.3 390" class="width-height1" rel="TA">
          <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="550" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-550'] ? '#fff000' : '' )}" @click="drawBox($event,550);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M9.6 4.3c1.4-1.2 2.5-3 3.8-3.8C17-1.2 20.1 4 20.8 6.1c.8 3.1-.6 7.4-1.6 9.2-.5.6-2.3.2-3.8.2-2 .2-3.5 1.7-5.2 1.8-.9 0-3.8-.5-6-2.1C2.8 14.4.7 8.7.4 8.1-.7 5.5 2.8 2.2 3.8 1.3c.6-.3 1.3-.2 1.9 0 1.5.8 3.1 1.9 3.9 3z">
          </path>
          <path fill-rule="evenodd" clip-rule="evenodd" id="551" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-551'] ? '#fff000' : '' )}" @click="drawBox($event,551);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M10.9 8.6c.1-1.5-.5-3.2-1.3-4.2M13.8 9.3c-.5-.3-3.1-1.6-4.9.2">
          </path>
        </svg>
        <svg id="b7-root" viewBox="147 -350 9.3 390" class="width-height1" rel="T">
          <path rel="CR1" fill-rule="evenodd" clip-rule="evenodd" fill="#F2ECBE"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M12.8.1l2.6 1.5c.8 4.7 1.1 9.5.8 14.3-.5 8.2-1.1 10.9-2.2 11.1-1.7.1-2.4-5.1-2.6-6.2-.1-2.1-1.8-4.8-1.9-5.5-.3-1-.3-5-1.4-5.2-.4.5-1.9 4.2-.5 10.3.3 1.2 2.5 7.9 1.6 8.3C5.7 30.3.4 14.8.3 11.3 0 9.4.1 2.9.7 1.5L12.8.1z">
          </path>
        </svg>
      </g>  
    </svg>
    <svg rel="BT">
      <g transform = "translate(0,55)">
        <svg rel="BG">
          <svg viewBox="124 -225 8.8 390" id="t6-root" class="width-height1" rel="B">
            <path rel="CR1" fill-rule="evenodd" clip-rule="evenodd" fill="#F2ECBE"
            stroke="#A7A9AC" stroke-width=".283" stroke-miterlimit="22.926" d="M3.9 15l1.2-5.4c.7-.7 2.3-4.8 3.1-7.9C8.5.7 9.4.2 10 .2c1.3.1 1.6 2.4 1.6 3.3.1 3.2.1 6.4 1.5 9.8l-.7 7.2-6.3 1.1L3.9 15z">
            </path>
            <path fill-rule="evenodd" clip-rule="evenodd" fill="#F2ECBE" stroke="#A7A9AC"
            stroke-width=".283" stroke-miterlimit="22.926" d="M4.3 29.2L2.2 29v-4.7c.1-3 .1-2.7-.8-5.4-.6-1.8-1-3.7-1.2-5.8-.2-3.3.2-5.6 1-8.8.4-1 1.4-2.6 3-3.1 1 .2 1.2 1.2 1.4 2.3L5 8.1c.1 1.5.5 2.9 1.2 4.2.9 1.8.9 1.5 1.2 3.5l.5 4.3c1.4 1.2 2.9-.7 4.5-4.2.3-1.2.5-1.9.8-2.6.9-2.2 1.2-3.1 1-4.8-.2-1.6 0-2.9 0-4.6 0-.2-.1-.5 0-.6 2.2-4.2 4.9 6.6 3.5 12.1-.4 3.9-1.5 6.3-2.3 9.5l-.1 4.8-7-2.5-4 2z">
            </path>
          </svg>
          <svg id="t6-crown" viewBox="124 -246 8.8 390" class="width-height1" rel="BA">
            <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="444" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-444'] ? '#fff000' : '' )}" @click="drawBox($event,444);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M2.8 3.1l-.4 1.1-.1 1.4C2.1 7.5 2 7.4 1.1 9c-.8 1.4-1 1.4-1 3 .1 1.8.1 2 1.3 3.4.6.8 1.2 1.3 1.6 1.4h2.9c1.1 1.6 2.4 2.7 4.3 1.1.5-.4.7-.7 1.6-1.8l1.7.7c1.3.5 2.1.7 3.3.6.6-.1 1.7-.7 2.2-1.8.4-.9.8-1.8 1.1-2.9.3-1 .3-1.5.1-2.5-.1-1-.4-2.3-.9-3.1l-.3-.8-.8-2.2c-.4-.9-1-1.3-1.7-1.7L12.3.9c-.6-.2-1.1-.8-1.7-.8-.8 0-1.6 0-2.3.5-1.3.9-1.9 1.2-2.7 1.5-.4.2-2.4 0-2.8 1z">
            </path>
            <path fill-rule="evenodd" clip-rule="evenodd" id="445" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-445'] ? '#fff000' : '' )}" @click="drawBox($event,445);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M5.9 16.8l2.5-1.1c.2-.1.6-.2.9-.5 2.3-1.8.2-4.8-.9-5.9">
            </path>
            <path fill-rule="evenodd" clip-rule="evenodd" id="446" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-446'] ? '#fff000' : '' )}" @click="drawBox($event,446);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M11.8 16c-1.1-1.3-2.1-4-1.3-5.6.6-1.2 1.1-2.6 2.4-3.5">
            </path>
          </svg>
        </svg>
        <svg id="t6-surface" viewBox="124 -270 8.8 390" class="width-height1"
        rel="BB">
          <path fill-rule="evenodd" clip-rule="evenodd" id="478" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-478'] ? '#fff000' : '' )}" @click="drawBox($event,478);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M1.7 12.9c-.1-.3-1-1.3-1.2-1.7-.3-.4-.6-6.4 0-7C2.8 1.8 5.2.7 5.9.4c1-.4 3.3-.4 4.7-.1 6.6 1.3 10.9 4 11.8 7.8.3 1.4.2 4.4-.1 6.7-.2 1.9-.9 3.2-1.9 4.6-.7 1.1-1.8 2.2-2.6 2.5-.7.3-2.4.3-3.4.3-.5-.1-2-1.6-2.4-1.6-.3-.1-1.6.5-2.4.8-.6.2-1.7.2-2.3 0-1-.2-2.6-1-3.8-2.3-1.3-1.5-2.1-3.6-2.1-4.2-.1-.4.3-1.6.3-2z">
          </path>
          <path fill-rule="evenodd" clip-rule="evenodd" id="479" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-479'] ? '#fff000' : '' )}" @click="drawBox($event,479);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M20.7 13.7c-.8 0-.9-.4-1.6-.5-.6-.1-1.2 0-1.7.1-.3.1-.6.6-.9.6-.3-.1-.3-.8-.9-1.1-.4-.2-.6-.8-1-.8s-1.3.6-1.7.6c-.4-.1-.9-.7-1.4-.8-.4 0-1.1-.3-1.4-.3-.4 0-1.3.5-1.9.6-.6 0-1.3-.1-1.7.1-.4.1-.7.5-1 .5-.4 0-.9 0-1.1-.1M17.7 6.7c.6-.4 1.3.6 1.4.9.3.6-.1 1.1-.3 1.4-.8 1-1.6 3-2 3-.3 0-1.7-1-2.3-1.7">
          </path>
          <path fill-rule="evenodd" clip-rule="evenodd" id="480" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-480'] ? '#fff000' : '' )}" @click="drawBox($event,480);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M15.6 5.9c-.7-.4-1.9.1-2 .3-.1.2-.7.8-.8 1.3-.1.6.2 1.2.3 1.4.2.3 1.2 1 1.4 1.4 0 .3-1.1 1-1.5 2.2 0 .5.7.5.6.9-.2.8-.8 1.7-1.2 1.8-.5.2-1.1 1.5-2 1.5M7.8 5.4c1-.7 2.1.9 2.5 1.8l.6 1.5c.5 1.2 0 2 .6 3M.2 8.6c.8.4 2 1.2 2.7 1.6.4.2.4 1.7 1.9 2.5-.3 0-.7 0-.9.1 0 1.9-.7 1.3-.8 1.8 0 .2-.1 1.4.1 1.5.2.1.4.2.7.1M3.7 4.9c.5 0 1 0 1.5.5.3.3.4 1 .4 1.4 0 .5.1 2-.2 2.7M11.7 20.7c1.2-.7 3-2.5 4.2-4.4.2-.4.4-.9.5-1.3 0-.4 0-.8.1-1.1">
          </path>
        </svg>
      </g>  
    </svg>
    <svg rel="ST">
      <g transform = "translate(0,55)">
        <svg rel="SG">
          <svg id="b6-surface" viewBox="124 -310 8.8 390" class="width-height1"
          rel="SB">
            <path fill-rule="evenodd" clip-rule="evenodd" id="517" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-517'] ? '#fff000' : '' )}" @click="drawBox($event,517);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M19.8 7.5c-.2-.5.3-2.8 0-3.5-1.3-1.9-4-3.7-6.4-3.6-.5 0-1.5.8-1.9.8-.4 0-1.2-.6-1.6-.8C9 .1 6.7.1 6.1.3 5.1.7 2.9 2.2 1.9 4c-.4.5-.7 2.3-.7 3.2 0 .5-.8 1.8-.8 2.3-.2.6-.3 2-.1 2.7.3.7 1.7 1.6 2.5 2.2.4.3 1.1 1.4 1.5 2 2.1 2.2 3.9 1.6 4.4 1.8.9.4 2.1.9 4 .8 1.8.1 2.3-.5 2.7-.5 1.2-.5 2.6-.5 3.1-.7 1.7-.6 2.3-2.4 2.5-2.7.7-1 .7-4.2.5-5-.1-.6-1.5-2-1.7-2.6z">
            </path>
            <path fill-rule="evenodd" clip-rule="evenodd" id="518" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-518'] ? '#fff000' : '' )}" @click="drawBox($event,518);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M4.5 8c-.4.6-.5 1.3-.7 1.9.2.2.4.4.7.6 0 .3-.1.6-.1.9 0 .1 0 .3.1.4h1.1v.5h1.5c.5-.1 1-.1 1.5-.2.1-.1.4-.1.7-.1.4 0 .8 0 1.1.1.7.3 1.4.7 2.1 1 .2 0 .4.1.6.1.2-.1.4-.2.5-.3.4-.1.8-.1 1.3-.2.9-1 .6-1.8.1-3-.2-.3-.5-.6-1-.7 0-.6 0-1.2-.3-1.7-.3-.3-.8-.3-1.5-.3 0-.2 0-.5.1-.7-.2.1-.5.1-.7.2l-1.8-.3c-.6.3-1.1.5-1.7.8-.4 0-.8-.1-1.2-.1-.4.1-1.4 0-2.4 1.1z">
            </path>
            <path fill-rule="evenodd" clip-rule="evenodd" id="519" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-519'] ? '#fff000' : '' )}" @click="drawBox($event,519);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M3.8 9.9c0 .4.6.4.7.6 0 .5-.2 1.2 0 1.3.3.1.9-.1 1.1 0 .1.2-.2.4 0 .5.4.1 2.2 0 2.9-.2M1.2 6.5c.3.3.5.9.8 1 .5 0 .3-1.3.4-1.4.2-.1.6.1.8 0 .2-.1 0-.4.1-.5.2-.1 1.8-.1 2.1-.1.2 0 .4.4.3.7M6.9 9.5c-.3-.9-.4-2.3-.1-2.5.4-.3 1.1.1 1.4 0 .4-.2.9-.6 1.6-.8.8-.1 1.2.7 2.5.1 0 .4-.2.7-.2 1-.1.4-.2.8-.4 1.1-.4.3-.8.9-1 1.4-.2.6-.9 1.3-1.7 1.6">
            </path>
            <path fill-rule="evenodd" clip-rule="evenodd" id="520" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-520'] ? '#fff000' : '' )}" @click="drawBox($event,520);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M8.7 3.1c-.1.5-.1 1.2 0 1.3.2.1.3.1.4.2.3.2-.1.9.2 1.1l.5.5M14.1 3.5c-.1.3-.4.6-.6.7-.2 0-.2.7-.4 1.1-.1.2-.4.3-.5.4-.2.2-.3.5-.3.7M12.2 7c.4-.1.8-.1 1.2.1.4.1.6.7.5.9 0 .3-.1.8 0 1 .1.2.5.2.7.3.2.1.3.5.4.8M17.4 5.5c-.5.3-.6.9-1.2.9-.4 0-.9.4-.8.6.1.3.4 0 .8.3.3.3.5.6.7.8.4.3.4 1.1.8 1.3.3.2 0 .7.2 1 .2.2.4.2.5.4.1.2 0 1.5-.1 1.8-.1.2-.6.3-.5.5M11.7 8.4c.3.4.2 1.5.8 1.8.5.4.3.8 1.4 1.9.3.1 1 .4 1 .7 0 .2-.6 0-1 .1s-.5.4-.8.4c-.2 0-.8-.2-1.1-.4-.5-.3-1-.7-1.5-.8">
            </path>
          </svg>
        </svg>
        <svg id="b6-crown" viewBox="124 -335 8.8 390" class="width-height1" rel="SA">
          <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="552" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-552'] ? '#fff000' : '' )}" @click="drawBox($event,552);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M.5 3.1c-.6 3.5-.3 6 .2 9.2.1.6.4 1.5.7 1.9 2.4 2.9 7.6 2 11.4 1.8 1.2-.1 3.3.4 3.6 0 1.3-1.4 3.4-4.4 3.8-5.4.8-1.6.8-4.5.4-5.7-.7-1.6-2.3-1.9-3.6-1.2-.2-.6-.8-2.5-2.4-2.9-2.8-.4-4.5 2.3-4.7 2.1C9.3 2.4 6.5.3 4.6.2 2.2-.2.8 1.8.5 3.1z">
          </path>
          <path fill-rule="evenodd" clip-rule="evenodd" id="553" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-553'] ? '#fff000' : '' )}" @click="drawBox($event,553);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M9.7 2.8c1.3.9 1 4 .7 5.9M17 3.7c.3.7.2 2.8-.3 4.2">
          </path>
        </svg>
        <svg viewBox="124 -350 8.8 390" id="b6-root" class="width-height1" rel="S">
          <path rel="CR1" fill-rule="evenodd" clip-rule="evenodd" fill="#F2ECBE"
          stroke="#939598" stroke-width=".283" stroke-miterlimit="22.926" d="M14.5.1l3 2.6c.5 2.7 0 6.4-.1 7.7-.2 1.7-.6 3.4-.6 5-.5 8.1-1 10.6-2.1 10.9-1.2.6-2.1-1.8-2.4-2.8-.4-1.1-.8-4.3-.9-5.7-.4-4.8-.4-8.8-.9-9C8.9 8 8 10.6 6.9 13.5c-.7 1.9-1 3.8-1 5.3 0 .6-.1 4.9-.5 6.1C3.8 29.3.9 23.8.3 17.7-.1 14.3.2 7.4 1 4.3 1.3 3 2.1 1.8 2.7.5L14.5.1z">
          </path>
        </svg>
      </g>  
    </svg>
    <svg rel="CT">
      <g transform = "translate(0,55)">
        <svg rel="CG">
          <svg id="t3-root" viewBox="117 -275 9.8 479" class="width-height1" rel="C">
            <path rel="CR1" fill-rule="evenodd" clip-rule="evenodd" fill="#F2ECBE"
            stroke="#A7A9AC" stroke-width=".283" stroke-miterlimit="22.926" d="M.3 38.3c-.3-9.7-.5-26.9 3.8-36 1.3-2.7 4.3-3.2 4.3.2.2 4.9-.6 8.6-.4 13.9-.4 2.8 2.1 9.5 2.1 12.6.1 4.2.1 6-1.4 9.4l-4.3 1.2-4.1-1.3z">
            </path>
          </svg>
          <svg id="t3-crown" viewBox="120 -303 9.8 479" class="width-height1" rel="CA">
            <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="450" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-450'] ? '#fff000' : '' )}" @click="drawBox($event,450);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M4.5 2.2c.2-.5.5-1 .9-1.2C6.5.4 7.6 0 9.1.1c1.7 0 3.7.9 4.1 2 .2.4 2.4 5.6 3.8 8.2 1.3 4.6-.9 9.1-4.6 10-.6 0-.6-.8-.8-.7 0 0-1 1.5-2.6 2-1.5.2-2.1-.5-3-1-6.3-3.8-7.5-6.5-2.8-13 .9-1.9.8-3 1.3-5.4z">
            </path>
            <path fill-rule="evenodd" clip-rule="evenodd" id="451" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-451'] ? '#fff000' : '' )}" @click="drawBox($event,451);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M11.6 9.4c-1.1 2.9-1.4 5.9-1 9.5">
            </path>
          </svg>
        </svg>
        <svg id="t3-surface" viewBox="120 -338 9.8 479" class="width-height1"
        rel="CB">
          <path fill-rule="evenodd" clip-rule="evenodd" id="481" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-481'] ? '#fff000' : '' )}" @click="drawBox($event,481);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M.7 4.6c-.5.7-.9 1.5-.2 3.5 1.9 4.8 5.6 8.7 8.3 9.3.9.4 2 .4 2.8 0 3.1-1.4 5.2-4.1 7-7.1.6-1.4.6-2.7.1-3.6C17.4 4 14.2 1.4 12.2.6 10.9 0 8.8.2 7.6.6c-2.7.7-5.9 2.5-6.9 4z">
          </path>
          <path fill-rule="evenodd" clip-rule="evenodd" id="482" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-482'] ? '#fff000' : '' )}" @click="drawBox($event,482);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M6.3 6.7C6 7.1 6 7.8 6 8.3c.1.5.4 1 .7 1.3.6.6.6 1.4.6 2.2.3-.1.6-.1.9-.2.4-.2.7-.4 1.1-.5.4 0 1 .1 1.1 0 0-.1 1 .2 1 .5.1.3.2 1.3 0 1.8-.1.5.3.5 1.1.1.6-.4.9-1 1.2-1.7.3-.3.4-.7.3-1.1 0-.4.1-.8.1-1.2.1-.6 0-1.2-.5-1.7-.4-.2-.7-.4-1.2-.4-.3.1-.6.3-.8.6-.7.8-2 2.5-3.1 1.8.1-.5.2-1.1.2-1.6 0-.6-.3-.9-.7-1.2-.5-.3-1.1-.3-1.7-.3z">
          </path>
          <path fill-rule="evenodd" clip-rule="evenodd" id="483" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-483'] ? '#fff000' : '' )}" @click="drawBox($event,483);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M1.9 5.8c-.3.7.5 1.4.6 1.7.6 2.3 3 4 3.3 4.1.4.2 1.7.3 2.4 0 .2-.1.5-.4.7-.5.4-.2 1.7-.2 2.1 0 .3.2.6.6.6.9-.1.6-.3 1.6 0 1.7.5.1.9-.3 1.3-.7.4-.4.6-1.3.9-1.5.3-.4.2-.8.6-.9.5-.1 1.1-.3 1.6-.6s.8-.2 1.2 0">
          </path>
          <path fill-rule="evenodd" clip-rule="evenodd" id="484" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-484'] ? '#fff000' : '' )}" @click="drawBox($event,484);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M11.6 7.9c.1-.4.5-.6 1-.6.4 0 1 .3 1.3.8.2.4.2.9.2 1.4-.1.7-.2 1.4 0 1.7M6.7 9.6c.6.4.5 1.4.6 2.2h.5c.2.9-.2 2.8.1 3.1 0 .1.2.3.4.3.1.1.1.3 0 .5M6.3 6.7c1.5-.1 2.3.5 2.5 1.4 0 .7-.4 1.6-.1 2 .2.3.6.6.7 1">
          </path>
        </svg>
      </g>   
    </svg>
    <svg rel="RT">
      <g transform = "translate(0,55)">
        <svg rel="RG">
          <svg id="b3-surface" viewBox="120 -385 9.8 479" class="width-height1"
          rel="RB">
            <path fill-rule="evenodd" clip-rule="evenodd" id="521" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-521'] ? '#fff000' : '' )}" @click="drawBox($event,521);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M.6 6.1C1 5.5 4.4 1.9 6.2.5c1-.6 2.4-.4 3.2 0 1.6.9 2.7 1.6 3.8 3 .7.8 1.5 2.3 1.8 3.5.6 1.4.4 2.9.1 4.2-.5 1.4-2.2 4.7-3.3 5.1-.9.3-4.2.2-5 0-.4-.1-2.6-1.9-3.4-2.6-1.1-1.2-2-2.7-2.9-4.2-.4-.8-.5-2.3.1-3.4z">
            </path>
            <path fill-rule="evenodd" clip-rule="evenodd" id="522" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-522'] ? '#fff000' : '' )}" @click="drawBox($event,522);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M3.4 6.9c.1-.6.4-.8.7-1 .7-.2.7-.5 1.4-1 .4-2.3.2-2.1 2.1-3.4.7.6.2 3.4.2 4.3.2 2.8-.6 3.5-1.4 3.4-.6.4-1.9-.3-2.6-.6-.3-.5-.7-.8-.4-1.7z">
            </path>
            <path fill-rule="evenodd" clip-rule="evenodd" id="523" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-523'] ? '#fff000' : '' )}" @click="drawBox($event,523);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M9.7 4.9c-.4.4.2 1.1.3 1.3.2.4.4 1.1.1 1.5-.2.2-.7 0-.7.4 0 .5.1.8.2 1 .7.3 1.6.5 2.3-.1.4-.4.3-.8.5-1.1.3-.6.9-.3 1.1-1-.1-.7-.4-1.1-.9-1.8-.1-.1-.2-.4-.5-.6-.2-.4-1.9-.4-2.4.4z">
            </path>
            <path fill-rule="evenodd" clip-rule="evenodd" id="524" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-524'] ? '#fff000' : '' )}" @click="drawBox($event,524);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M5.4 4.9c.3-.5.1-1.6.5-2 .3-.4 1.3-1.4 1.6-1.4.5.1.1 4.1.2 6.2M10.4 4.4c.6-.1 1.5-.1 1.7 0 .2.1.9 1.1 1 1.3.1.3.5 1 .4 1.2-.1.2-.4.3-.6.4-.2.1-.4.3-.5.5M10.1 6.1c.1.5.1 1.3 0 1.6-.2.2-.5 0-.6.2-.1.1 0 .9.1 1.1.1.2.5.2.8.2M3.4 7c0 .3-.1.9.1 1.2.3.5 1.1.8 1.3.9.3.1 1 .1 1.5.1">
            </path>
          </svg>
        </svg>
        <svg id="b3-crown" viewBox="120 -413 9.8 479" class="width-height1" rel="RA">
          <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="554" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-554'] ? '#fff000' : '' )}" @click="drawBox($event,554);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M.8 4.7C1.5 3.6 5.9.2 7.7.2c1.9 0 5.4 3.3 7.3 5.9 2.4 3.8-.3 5.8-2 9.2-.5 1 0 4.8-1.3 6.3-1.4 1-5.8 1.5-7.9-.2-.5-1.2-.5-2.4-.6-3.7-.1-2.5-4.7-10.9-2.4-13z">
          </path>
        </svg>
        <svg id="b3-root" viewBox="120 -442 9.8 490" class="width-height1" rel="R">
          <path rel="CR1" fill-rule="evenodd" clip-rule="evenodd" fill="#F2ECBE"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M1.2 1.3c-2.3 2.9-1 30.4 3.3 29.8.6-.1 4.1-.6 4.5-8.2.3-4.8 1.4-17.5-.6-21.1L5.3.1 1.2 1.3z">
          </path>
        </svg>
      </g>  
    </svg>
    <svg rel="DT">
      <g transform = "translate(0,55)">
        <svg rel="DG">
          <svg id="t2-root" viewBox="70 -223 8.4 390" class="width-height1" rel="D">
            <path rel="CR1" fill-rule="evenodd" clip-rule="evenodd" fill="#F2ECBE"
            stroke="#A7A9AC" stroke-width=".283" stroke-miterlimit="22.926" d="M8.5 30.3c.3-.5.5-1.4.8-2.2 1.2-3.1-1-13.6-.3-23.3 0-.6.2-1.5.2-2.2C9-.4 6.5-1.5 4.7 4c-.9 2-1.2 4.7-1.4 7.1-.4 6.3-4 14.7-3.1 17.8.1.5.3 1.4.7 1.5l4.5 2.2 3.1-2.3z">
            </path>
          </svg>
          <svg id="t2-crown" viewBox="73 -245 8.4 390" class="width-height1" rel="DA">
            <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="455" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-455'] ? '#fff000' : '' )}" @click="drawBox($event,455);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" class="eust3"
            d="M4.3 2.1c.1-.5.5-1.1.8-1.2 2.7-1 4.4-.9 6.8 0 .4.1 1.1 2 1.3 2.3 2 4.7 2.7 11.4-.7 13.6-.4.4-1.9.8-2.5.1-.5 1-2.6 1-3.6 1.1-1.6-.1-2.3-.3-3.2-.9-1.7.1-3.3.1-3.1-2.3C1.8 9 2.9 7.3 4.3 2.1z">
            </path>
          </svg>
        </svg>
        <svg id="t2-surface" viewBox="73 -275 8.4 390" class="width-height1" rel="DB">
          <path fill-rule="evenodd" clip-rule="evenodd" id="485" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-485'] ? '#fff000' : '' )}" @click="drawBox($event,485);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M.5 5.3c.8-1.5 3-4 4.8-4.7.6-.5 3.4-.6 4 0 1.3.6 4 3 4.8 4.6.4.7.5 2.4.1 3.4-.7 2.1-2.6 3.9-4.6 5.3-.8.4-2 .3-2.6 0-.6-.2-4.4-3.1-6.1-5.5-.2-.2-.3-.4-.4-.5C0 7.3.1 5.8.5 5.3z">
          </path>
          <path fill-rule="evenodd" clip-rule="evenodd" id="486" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-486'] ? '#fff000' : '' )}" @click="drawBox($event,486);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M.7 8.2c.9.2 2.4.2 2.7 0 .3-.1.5-1 .9-1s1.1 1.4 1.5 1.5c.2.2 2 .2 2.5.1.8-.1 1.3-1.1 2-1 .6 0 .4 1 .9 1.1.3.1 1.9-.2 2.9 0M5.2 10.8c0-.8.2-1.7.8-2.1">
          </path>
          <path fill-rule="evenodd" clip-rule="evenodd" id="487" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-487'] ? '#fff000' : '' )}" @click="drawBox($event,487);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M9.3 12.7C8.9 12 8 11.5 8 11.1c-.1-.3.3-1.8.3-2.3M11.9 11.9c-.8-.2-.8-2.3-1.4-2.5-.2-.2.1-.6.5-.8">
          </path>
        </svg>
      </g>  
    </svg>
    <svg rel="QT">
      <g transform = "translate(0,55)">
        <svg rel="QG">
          <svg id="b2-surface" viewBox="73 -312 8.4 390" class="width-height1" rel="QB">
            <path fill-rule="evenodd" clip-rule="evenodd" id="525" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-525'] ? '#fff000' : '' )}" @click="drawBox($event,525);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M5.1.6c-.6.3-1.6 1.5-1.8 2.2-.2.7-.4 1.2-.7 1.7C2.3 4.9 1 5.9.7 6.4c-.3.5-.9 2.6-.3 4.3.3 1 2 2.7 2.9 3.1.9.4 4.1.5 5.8.2 1.2-.5 3.3-1.7 4.6-4.3.4-1 .6-2.2-.1-3.1C11.8 4.3 9.7 2.2 7.7.4 7.1.1 6 0 5.1.6z">
            </path>
            <path fill-rule="evenodd" clip-rule="evenodd" id="526" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-526'] ? '#fff000' : '' )}" @click="drawBox($event,526);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M5.4 2.2c.3-.5.8-.7 1.1-.7.7 0 1 .6 1 1.5 0 .2 0 .5.1.7.6.1.8.4.5 1.1.6.2 1.2.3 1.8.2.4 0 .8.6 1.2 1.1.6.7.5 1.5.4 2.3-.2.3-.2.6-1.1.6-.5-.3-.6-.6-.7-.7-.6 0-1.2-.1-1.8-.1-.4-.1-.7-.2-1-.3-.5-.1-1-.2-1.4-.2-1 .2-2.6 1.8-3.1.2v-.6c0-.8.4-1.1.9-1.4 0-.4.1-.7.1-1.1.4-.3.7-.5 1.1-.8 0-.3 0-.5.1-.8.3-.3.5-.7.8-1z">
            </path>
            <path fill-rule="evenodd" clip-rule="evenodd" id="527" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-527'] ? '#fff000' : '' )}" @click="drawBox($event,527);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M5.5 2.3c-.4.2-.7.5-1 1-.1.2.1.5 0 .8-.1.2-.9.5-1.1.7-.1.2 0 .7-.1 1.1-.1.3-.7.4-.8.7-.1.3-.1.9-.1 1.3M6.5 1.6c.5-.2.7 0 1 .7.2.4-.1 1.1.1 1.4.2.2.5.1.6.3.1.2-.2.7 0 .8.3.4 2.1 0 2.2.5.1.5.9.9 1.1 1.3.2.4.1 1.2.1 1.9M5.1 7.7c.6-.1 1.7 0 2.1.3.5.4 1.8.1 2.5.3">
            </path>
          </svg>
        </svg>
        <svg id="b2-crown" viewBox="76 -337 8.4 390" class="width-height1" rel="QA">
          <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="555" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-555'] ? '#fff000' : '' )}" @click="drawBox($event,555);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M.1 4.6C.1 3.1 1.3.7 2.5.3c.6-.4 1.6.3 2.6.5 1.6.5 4 .8 5.8.9 5.3 2.9 1.1 15.6-.6 19.4-.1.1-.2.3-.3.4-.7.5-6 .2-6.7-1.4C2.9 20.3.7 10 .1 4.6z">
          </path>
        </svg>
        <svg id="b2-root" viewBox="73 -352 8.4 390" class="width-height1" rel="Q">
          <path rel="CR1" fill-rule="evenodd" clip-rule="evenodd" fill="#F2ECBE"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M.6 1.9c-.7 5.5-.8 14 1.2 21 1.6 6.1 2.4 10.1 4.6.7.6-4.2 3.3-11.3 1-20.5L4.7.1.6 1.9z">
          </path>
        </svg>
      </g>   
    </svg>
    <svg rel="ET">
      <g transform = "translate(0,55)">
        <svg rel="EG">
          <svg id="t1-root" viewBox="53 -270 11.8 460" class="width-height1" rel="E">
            <path rel="CR1" fill-rule="evenodd" clip-rule="evenodd" fill="#F2ECBE"
            stroke="#A7A9AC" stroke-width=".283" stroke-miterlimit="22.926" d="M.6 31c-1-4.8-.5-10.5.5-14 1.2-4.4 1.2-8.4 1.6-12.6.4-2.4 2.7-8.1 6.4-.1 3.5 8.4 3 22.4 2.4 24.2L7 31.2.6 31z">
            </path>
          </svg>
          <svg id="t1-crown" viewBox="56 -287 11.8 460" class="width-height1" rel="EA">
            <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="456" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-456'] ? '#fff000' : '' )}" @click="drawBox($event,456);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M3.4 4.4c.1-.2.4-.5.5-.6C5.4 2.2 7 .6 9.6.2c5.7-.8 7.2 4.2 9.2 12.9 1.3 5.3-.7 6.5-4.8 8.2-.3 0-.8-.3-1.3.3-3.7 1.9-6.5 1.1-6.9.5-.3-.2-.5-.1-.9.2C.1 23.5.2 18.6.2 16.7c0-2.3 2.1-6.3 3.2-11.8 0-.1-.1-.3 0-.5z">
            </path>
            <path fill-rule="evenodd" clip-rule="evenodd" id="457" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-457'] ? '#fff000' : '' )}" @click="drawBox($event,457);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M5.2 18.5c.3 1.2.3 2.2.1 3.7M13.3 18.3c.1.6.1 2.4 0 3">
            </path>
          </svg>
        </svg>
        <svg id="t1-surface" viewBox="56 -325 11.8 460" class="width-height1"
        rel="EB">
          <path fill-rule="evenodd" clip-rule="evenodd" id="488" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-488'] ? '#fff000' : '' )}" @click="drawBox($event,488);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M6.4 1.2C7 .9 7.6.6 8.3.4 9.7.1 11.6 0 13.2.3c.7.1 1.2.6 1.7 1 .2.3 1.3.3 1.8.4 1.5.3 2.3 1.4 2.4 1.5.4.4.8.8 1 1.5.4 1.4.3 3-.3 4.7-1.4 2-3.7 6.2-6.2 7.2-.5.3-3 .1-3 .1C8.3 15.3-3.2 8.8 1.1 4.5c.4-.8 2-2.7 3.4-2.9.4-.1 1.6-.2 1.9-.4z">
          </path>
          <path fill-rule="evenodd" clip-rule="evenodd" id="489" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-489'] ? '#fff000' : '' )}" @click="drawBox($event,489);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M1.1 8.9c.3-.6.6-.9 1.2-1 1.3-.1 2.7-.1 3.2.3.6.6 1.1.3 1.5-.2.6-.3 1.3-.3 2-.1h1.9c.3.2.5.4.8.6l.5-.5c.7 0 1.4-.1 2-.1 1-.4 1.9-.5 2.7-.4.7.1 1.2.5 1.4 1 .2.7.2 1.5 0 2.4-.1.6-.3 1-.7 1.4-.8-.1-1.3-.5-1.7-1.3-.8-.6-1.7-.8-2.9-.7-.5.4-1 .6-1.6.5-1.1-1-.9-1.5-2.3-1.3-.4 0-.8.1-1.3.1-.2.1-.8.7-1.5.3-.2-.3-.4-.4-.7-.5-.5-.2-1.3.4-2.1 1.2-.2.2-.3.2-.5.4-.8-.8-1.3-1.3-1.9-2.1z">
          </path>
          <path fill-rule="evenodd" clip-rule="evenodd" id="490" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-490'] ? '#fff000' : '' )}" @click="drawBox($event,490);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M7 8c-.3.2-.7.6-1.1.5-.3 0-.5-.5-.9-.6-1.3 0-2.7-.1-3.1.1-.3.2-.7.6-1 1M9 7.9h1.9c.2 0 .5.6.8.6.2 0 .5-.6.7-.6h1.9M16.9 7.5c.5.1 1.1.4 1.3.8.2.4.3 1.7 0 2.6-.1.6-.2.9-.7 1.4-.6.3-1.4-.5-1.7-1.3M7.7 9.6c.8-.2 1.7-.2 2.5 0 .6.4.6 1.1 1.1 1.1.6 0 1.1-.3 1.6-.5">
          </path>
          <path fill-rule="evenodd" clip-rule="evenodd" id="491" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-491'] ? '#fff000' : '' )}" @click="drawBox($event,491);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M14.8 15.7c-.6-.5-1.4-.9-2.2-1.2-.3-.1-.5-1.2-1-1.8-.2-.5-.4-1.3-.3-1.9">
          </path>
          <path fill-rule="evenodd" clip-rule="evenodd" id="492" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-492'] ? '#fff000' : '' )}" @click="drawBox($event,492);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M2.7 11.1c.8-.4 1.4-1 2.1-1.6.4-.2 1-.3 1.4.4.1 1.1.4 2 .7 2.8.3 1.2 2.1 2.8 3.1 3.5">
          </path>
        </svg>
      </g>   
    </svg>
    <svg rel="PT">
      <g transform = "translate(0,55)">
        <svg rel="PG">
          <svg id="b1-surface" viewBox="56 -370 11.8 460" class="width-height1"
          rel="PB">
            <path fill-rule="evenodd" clip-rule="evenodd" id="528" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-528'] ? '#fff000' : '' )}" @click="drawBox($event,528);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M.3 6.2C1.1 4.1 2.8 1.3 3.6.7c1.1-.8 2.2-.7 3-.4 1.3.6 4.3 3.8 5.4 6 .3.7.3 2.6.2 4.2-.3 1.1-.9 2-1.6 2.5-.8.4-1.8.5-3.1.9-1.1.4-3.6.4-4.6-.1C1.3 13 .6 11 .3 9.9.2 8.8 0 7.4.3 6.2z">
            </path>
            <path fill-rule="evenodd" clip-rule="evenodd" id="529" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-529'] ? '#fff000' : '' )}" @click="drawBox($event,529);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M5.2 1.7c.7 0 1.2.4 1.3.9.2.4.4 1 .6 1.4l1.5 1.2c.7.5 1.3 1 1.6 1.8.2.5-.1.7-.6.7h-.7c-.5-.2-1.1-.1-2 0-.9.1-1.8 0-2.7-.1H2.9c-.5-.1-1 0-1.1-.6 0-.7.2-1.3.6-2 .4-.6.8-1.3 1.2-1.9.4-.6.9-1.2 1.6-1.4z">
            </path>
            <path fill-rule="evenodd" clip-rule="evenodd" id="530" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-530'] ? '#fff000' : '' )}" @click="drawBox($event,530);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M5.1 1.8c-.4 0-.9.3-1.2.8-.5.8-1.3 2.1-1.5 2.5-.3.4-.6 1.3-.5 2M6.3 2.7c.4.3.6 1.1.8 1.3.4.5 2.1 1.4 2.8 2.5.2.2.4.7.2 1-.3.2-.8.2-1.2.1M2.9 7.4c1.4.1 2.7.4 4 .2">
            </path>
          </svg>
        </svg>
        <svg id="b1-crown" viewBox="55 -400 11.8 460" class="width-height1" rel="PA">
          <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="556" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-556'] ? '#fff000' : '' )}" @click="drawBox($event,556);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M.1 4.6C.1 3.1 1.3.7 2.5.3c.6-.4 1.6.3 2.6.5 1.6.5 4 .8 5.8.9 5.3 2.9 1.1 15.6-.6 19.4-.1.1-.2.3-.3.4-.7.5-6 .2-6.7-1.4C2.9 20.3.7 10 .1 4.6z">
          </path>
        </svg>
        <svg id="b1-root" viewBox="53 -415 11.8 460" class="width-height1" rel="P">
          <path rel="CR1" fill-rule="evenodd" clip-rule="evenodd" fill="#F2ECBE"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M.6 1.9c-.7 5.5-.8 14 1.2 21 1.6 6.1 2.4 10.1 4.6.7.6-4.2 3.3-11.3 1-20.5L4.7.1.6 1.9z">
          </path>
        </svg>
      </g>  
    </svg>
    <svg rel="FT">
      <g transform = "translate(0,55)">
        <svg rel="FG">
          <svg id="t1-root" viewBox="23 -270 7.8 460" class="width-height1" rel="F">
            <path rel="CR1" fill-rule="evenodd" clip-rule="evenodd" fill="#F2ECBE"
            stroke="#A7A9AC" stroke-width=".283" stroke-miterlimit="22.926" d="M.6 31c-1-4.8-.5-10.5.5-14 1.2-4.4 1.2-8.4 1.6-12.6.4-2.4 2.7-8.1 6.4-.1 3.5 8.4 3 22.4 2.4 24.2L7 31.2.6 31z">
            </path>
          </svg>
          <svg id="t1-crown" viewBox="26 -287 7.8 460" class="width-height1" rel="FA">
            <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="458" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-458'] ? '#fff000' : '' )}" @click="drawBox($event,458);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M3.4 4.4c.1-.2.4-.5.5-.6C5.4 2.2 7 .6 9.6.2c5.7-.8 7.2 4.2 9.2 12.9 1.3 5.3-.7 6.5-4.8 8.2-.3 0-.8-.3-1.3.3-3.7 1.9-6.5 1.1-6.9.5-.3-.2-.5-.1-.9.2C.1 23.5.2 18.6.2 16.7c0-2.3 2.1-6.3 3.2-11.8 0-.1-.1-.3 0-.5z">
            </path>
            <path fill-rule="evenodd" clip-rule="evenodd" id="459" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-459'] ? '#fff000' : '' )}" @click="drawBox($event,459);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M5.2 18.5c.3 1.2.3 2.2.1 3.7M13.3 18.3c.1.6.1 2.4 0 3">
            </path>
          </svg>
        </svg>
        <svg id="t1-surface" viewBox="26 -325 7.8 460" class="width-height1" rel="FB">
          <path fill-rule="evenodd" clip-rule="evenodd" id="493" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-493'] ? '#fff000' : '' )}" @click="drawBox($event,493);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M6.4 1.2C7 .9 7.6.6 8.3.4 9.7.1 11.6 0 13.2.3c.7.1 1.2.6 1.7 1 .2.3 1.3.3 1.8.4 1.5.3 2.3 1.4 2.4 1.5.4.4.8.8 1 1.5.4 1.4.3 3-.3 4.7-1.4 2-3.7 6.2-6.2 7.2-.5.3-3 .1-3 .1C8.3 15.3-3.2 8.8 1.1 4.5c.4-.8 2-2.7 3.4-2.9.4-.1 1.6-.2 1.9-.4z">
          </path>
          <path fill-rule="evenodd" clip-rule="evenodd" id="494" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-494'] ? '#fff000' : '' )}" @click="drawBox($event,494);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M1.1 8.9c.3-.6.6-.9 1.2-1 1.3-.1 2.7-.1 3.2.3.6.6 1.1.3 1.5-.2.6-.3 1.3-.3 2-.1h1.9c.3.2.5.4.8.6l.5-.5c.7 0 1.4-.1 2-.1 1-.4 1.9-.5 2.7-.4.7.1 1.2.5 1.4 1 .2.7.2 1.5 0 2.4-.1.6-.3 1-.7 1.4-.8-.1-1.3-.5-1.7-1.3-.8-.6-1.7-.8-2.9-.7-.5.4-1 .6-1.6.5-1.1-1-.9-1.5-2.3-1.3-.4 0-.8.1-1.3.1-.2.1-.8.7-1.5.3-.2-.3-.4-.4-.7-.5-.5-.2-1.3.4-2.1 1.2-.2.2-.3.2-.5.4-.8-.8-1.3-1.3-1.9-2.1z">
          </path>
          <path fill-rule="evenodd" clip-rule="evenodd" id="495" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-495'] ? '#fff000' : '' )}" @click="drawBox($event,495);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M7 8c-.3.2-.7.6-1.1.5-.3 0-.5-.5-.9-.6-1.3 0-2.7-.1-3.1.1-.3.2-.7.6-1 1M9 7.9h1.9c.2 0 .5.6.8.6.2 0 .5-.6.7-.6h1.9M16.9 7.5c.5.1 1.1.4 1.3.8.2.4.3 1.7 0 2.6-.1.6-.2.9-.7 1.4-.6.3-1.4-.5-1.7-1.3M7.7 9.6c.8-.2 1.7-.2 2.5 0 .6.4.6 1.1 1.1 1.1.6 0 1.1-.3 1.6-.5">
          </path>
          <path fill-rule="evenodd" clip-rule="evenodd" id="496" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-496'] ? '#fff000' : '' )}" @click="drawBox($event,496);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M14.8 15.7c-.6-.5-1.4-.9-2.2-1.2-.3-.1-.5-1.2-1-1.8-.2-.5-.4-1.3-.3-1.9">
          </path>
          <path fill-rule="evenodd" clip-rule="evenodd" id="497" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-497'] ? '#fff000' : '' )}" @click="drawBox($event,497);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M2.7 11.1c.8-.4 1.4-1 2.1-1.6.4-.2 1-.3 1.4.4.1 1.1.4 2 .7 2.8.3 1.2 2.1 2.8 3.1 3.5">
          </path>
        </svg>
      </g>  
    </svg>
    <svg rel="OT">
      <g transform = "translate(0,55)">
        <svg rel="OG">
          <svg id="b1-surface" viewBox="26 -370 7.8 460" class="width-height1" rel="OB">
            <path fill-rule="evenodd" clip-rule="evenodd" id="531" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-531'] ? '#fff000' : '' )}" @click="drawBox($event,531);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M.3 6.2C1.1 4.1 2.8 1.3 3.6.7c1.1-.8 2.2-.7 3-.4 1.3.6 4.3 3.8 5.4 6 .3.7.3 2.6.2 4.2-.3 1.1-.9 2-1.6 2.5-.8.4-1.8.5-3.1.9-1.1.4-3.6.4-4.6-.1C1.3 13 .6 11 .3 9.9.2 8.8 0 7.4.3 6.2z">
            </path>
            <path fill-rule="evenodd" clip-rule="evenodd" id="532" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-532'] ? '#fff000' : '' )}" @click="drawBox($event,532);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M5.2 1.7c.7 0 1.2.4 1.3.9.2.4.4 1 .6 1.4l1.5 1.2c.7.5 1.3 1 1.6 1.8.2.5-.1.7-.6.7h-.7c-.5-.2-1.1-.1-2 0-.9.1-1.8 0-2.7-.1H2.9c-.5-.1-1 0-1.1-.6 0-.7.2-1.3.6-2 .4-.6.8-1.3 1.2-1.9.4-.6.9-1.2 1.6-1.4z">
            </path>
            <path fill-rule="evenodd" clip-rule="evenodd" id="533" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-533'] ? '#fff000' : '' )}" @click="drawBox($event,533);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M5.1 1.8c-.4 0-.9.3-1.2.8-.5.8-1.3 2.1-1.5 2.5-.3.4-.6 1.3-.5 2M6.3 2.7c.4.3.6 1.1.8 1.3.4.5 2.1 1.4 2.8 2.5.2.2.4.7.2 1-.3.2-.8.2-1.2.1M2.9 7.4c1.4.1 2.7.4 4 .2">
            </path>
          </svg>
        </svg>
        <svg id="b1-crown" viewBox="26 -400 7.8 460" class="width-height1" rel="OA">
          <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="557" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-557'] ? '#fff000' : '' )}" @click="drawBox($event,557);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M.1 4.6C.1 3.1 1.3.7 2.5.3c.6-.4 1.6.3 2.6.5 1.6.5 4 .8 5.8.9 5.3 2.9 1.1 15.6-.6 19.4-.1.1-.2.3-.3.4-.7.5-6 .2-6.7-1.4C2.9 20.3.7 10 .1 4.6z">
          </path>
        </svg>
        <svg id="b1-root" viewBox="23 -415 7.8 460" class="width-height1" rel="O">
           <path rel="CR1" fill-rule="evenodd" clip-rule="evenodd" fill="#F2ECBE"
           stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M.6 1.9c-.7 5.5-.8 14 1.2 21 1.6 6.1 2.4 10.1 4.6.7.6-4.2 3.3-11.3 1-20.5L4.7.1.6 1.9z">
          </path>
        </svg>
      </g>   
    </svg>
    <svg rel="GT">
      <g transform = "translate(0,55)">
        <svg rel="GG">
          <svg id="t2-root" viewBox="-5 -223 8.4 390" class="width-height1" rel="G">
            <path rel="CR1" fill-rule="evenodd" clip-rule="evenodd" fill="#F2ECBE"
            stroke="#A7A9AC" stroke-width=".283" stroke-miterlimit="22.926" d="M8.5 30.3c.3-.5.5-1.4.8-2.2 1.2-3.1-1-13.6-.3-23.3 0-.6.2-1.5.2-2.2C9-.4 6.5-1.5 4.7 4c-.9 2-1.2 4.7-1.4 7.1-.4 6.3-4 14.7-3.1 17.8.1.5.3 1.4.7 1.5l4.5 2.2 3.1-2.3z">
            </path>
          </svg>
          <svg id="t2-crown" viewBox="-2 -243 8.4 390" class="width-height1" rel="GA">
            <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="463" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-463'] ? '#fff000' : '' )}" @click="drawBox($event,463);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" class="eust3"
            d="M4.3 2.1c.1-.5.5-1.1.8-1.2 2.7-1 4.4-.9 6.8 0 .4.1 1.1 2 1.3 2.3 2 4.7 2.7 11.4-.7 13.6-.4.4-1.9.8-2.5.1-.5 1-2.6 1-3.6 1.1-1.6-.1-2.3-.3-3.2-.9-1.7.1-3.3.1-3.1-2.3C1.8 9 2.9 7.3 4.3 2.1z">
            </path>
          </svg>
        </svg>
        <svg id="t2-surface" viewBox="-2 -275 8.4 390" class="width-height1" rel="GB">
          <path fill-rule="evenodd" clip-rule="evenodd" id="498" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-498'] ? '#fff000' : '' )}" @click="drawBox($event,498);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M.5 5.3c.8-1.5 3-4 4.8-4.7.6-.5 3.4-.6 4 0 1.3.6 4 3 4.8 4.6.4.7.5 2.4.1 3.4-.7 2.1-2.6 3.9-4.6 5.3-.8.4-2 .3-2.6 0-.6-.2-4.4-3.1-6.1-5.5-.2-.2-.3-.4-.4-.5C0 7.3.1 5.8.5 5.3z">
          </path>
          <path fill-rule="evenodd" clip-rule="evenodd" id="499" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-499'] ? '#fff000' : '' )}" @click="drawBox($event,499);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M.7 8.2c.9.2 2.4.2 2.7 0 .3-.1.5-1 .9-1s1.1 1.4 1.5 1.5c.2.2 2 .2 2.5.1.8-.1 1.3-1.1 2-1 .6 0 .4 1 .9 1.1.3.1 1.9-.2 2.9 0M5.2 10.8c0-.8.2-1.7.8-2.1">
          </path>
          <path fill-rule="evenodd" clip-rule="evenodd" id="500" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-500'] ? '#fff000' : '' )}" @click="drawBox($event,500);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M9.3 12.7C8.9 12 8 11.5 8 11.1c-.1-.3.3-1.8.3-2.3M11.9 11.9c-.8-.2-.8-2.3-1.4-2.5-.2-.2.1-.6.5-.8">
          </path>
        </svg>
      </g>   
    </svg>
    <svg rel="NT">
      <g transform = "translate(0,55)">
        <svg rel="NG">
          <svg id="b2-surface" viewBox="-2 -310 8.4 390" class="width-height1" rel="NB">
            <path fill-rule="evenodd" clip-rule="evenodd" id="534" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-534'] ? '#fff000' : '' )}" @click="drawBox($event,534);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M5.1.6c-.6.3-1.6 1.5-1.8 2.2-.2.7-.4 1.2-.7 1.7C2.3 4.9 1 5.9.7 6.4c-.3.5-.9 2.6-.3 4.3.3 1 2 2.7 2.9 3.1.9.4 4.1.5 5.8.2 1.2-.5 3.3-1.7 4.6-4.3.4-1 .6-2.2-.1-3.1C11.8 4.3 9.7 2.2 7.7.4 7.1.1 6 0 5.1.6z">
            </path>
            <path fill-rule="evenodd" clip-rule="evenodd" id="535" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-535'] ? '#fff000' : '' )}" @click="drawBox($event,535);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M5.4 2.2c.3-.5.8-.7 1.1-.7.7 0 1 .6 1 1.5 0 .2 0 .5.1.7.6.1.8.4.5 1.1.6.2 1.2.3 1.8.2.4 0 .8.6 1.2 1.1.6.7.5 1.5.4 2.3-.2.3-.2.6-1.1.6-.5-.3-.6-.6-.7-.7-.6 0-1.2-.1-1.8-.1-.4-.1-.7-.2-1-.3-.5-.1-1-.2-1.4-.2-1 .2-2.6 1.8-3.1.2v-.6c0-.8.4-1.1.9-1.4 0-.4.1-.7.1-1.1.4-.3.7-.5 1.1-.8 0-.3 0-.5.1-.8.3-.3.5-.7.8-1z">
            </path>
            <path fill-rule="evenodd" clip-rule="evenodd" id="536" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-536'] ? '#fff000' : '' )}" @click="drawBox($event,536);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M5.5 2.3c-.4.2-.7.5-1 1-.1.2.1.5 0 .8-.1.2-.9.5-1.1.7-.1.2 0 .7-.1 1.1-.1.3-.7.4-.8.7-.1.3-.1.9-.1 1.3M6.5 1.6c.5-.2.7 0 1 .7.2.4-.1 1.1.1 1.4.2.2.5.1.6.3.1.2-.2.7 0 .8.3.4 2.1 0 2.2.5.1.5.9.9 1.1 1.3.2.4.1 1.2.1 1.9M5.1 7.7c.6-.1 1.7 0 2.1.3.5.4 1.8.1 2.5.3">
            </path>
          </svg>
        </svg>
        <svg id="b2-crown" viewBox="-2 -337 8.4 390" class="width-height1" rel="NA">
          <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="558" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-558'] ? '#fff000' : '' )}" @click="drawBox($event,558);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M.1 4.6C.1 3.1 1.3.7 2.5.3c.6-.4 1.6.3 2.6.5 1.6.5 4 .8 5.8.9 5.3 2.9 1.1 15.6-.6 19.4-.1.1-.2.3-.3.4-.7.5-6 .2-6.7-1.4C2.9 20.3.7 10 .1 4.6z">
          </path>
        </svg>
        <svg id="b2-root" viewBox="-5 -350 8.4 390" class="width-height1" rel="N">
          <path rel="CR1" fill-rule="evenodd" clip-rule="evenodd" fill="#F2ECBE"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M.6 1.9c-.7 5.5-.8 14 1.2 21 1.6 6.1 2.4 10.1 4.6.7.6-4.2 3.3-11.3 1-20.5L4.7.1.6 1.9z">
          </path>
        </svg>
      </g>   
    </svg>
    <svg rel="HT">
      <g transform = "translate(0,55)">
        <svg rel="HG">
          <svg id="t3-root" viewBox="-36 -262 9.8 460" class="width-height1" rel="H">
            <path rel="CR1" fill-rule="evenodd" clip-rule="evenodd" fill="#F2ECBE"
            stroke="#A7A9AC" stroke-width=".283" stroke-miterlimit="22.926" d="M.3 38.3c-.3-9.7-.5-26.9 3.8-36 1.3-2.7 4.3-3.2 4.3.2.2 4.9-.6 8.6-.4 13.9-.4 2.8 2.1 9.5 2.1 12.6.1 4.2.1 6-1.4 9.4l-4.3 1.2-4.1-1.3z">
            </path>
          </svg>
          <svg id="t3-crown" viewBox="-32 -285 9.8 460" class="width-height1" rel="HA">
            <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="467" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-467'] ? '#fff000' : '' )}" @click="drawBox($event,467);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M4.5 2.2c.2-.5.5-1 .9-1.2C6.5.4 7.6 0 9.1.1c1.7 0 3.7.9 4.1 2 .2.4 2.4 5.6 3.8 8.2 1.3 4.6-.9 9.1-4.6 10-.6 0-.6-.8-.8-.7 0 0-1 1.5-2.6 2-1.5.2-2.1-.5-3-1-6.3-3.8-7.5-6.5-2.8-13 .9-1.9.8-3 1.3-5.4z">
            </path>
            <path fill-rule="evenodd" clip-rule="evenodd" id="468" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-468'] ? '#fff000' : '' )}" @click="drawBox($event,468);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M11.6 9.4c-1.1 2.9-1.4 5.9-1 9.5">
            </path>
          </svg>
        </svg>
        <svg id="t3-surface" viewBox="-32 -323 9.8 460" class="width-height1"
        rel="HB">
          <path fill-rule="evenodd" clip-rule="evenodd" id="501" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-501'] ? '#fff000' : '' )}" @click="drawBox($event,501);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M.7 4.6c-.5.7-.9 1.5-.2 3.5 1.9 4.8 5.6 8.7 8.3 9.3.9.4 2 .4 2.8 0 3.1-1.4 5.2-4.1 7-7.1.6-1.4.6-2.7.1-3.6C17.4 4 14.2 1.4 12.2.6 10.9 0 8.8.2 7.6.6c-2.7.7-5.9 2.5-6.9 4z">
          </path>
          <path fill-rule="evenodd" clip-rule="evenodd" id="502" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-502'] ? '#fff000' : '' )}" @click="drawBox($event,502);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M6.3 6.7C6 7.1 6 7.8 6 8.3c.1.5.4 1 .7 1.3.6.6.6 1.4.6 2.2.3-.1.6-.1.9-.2.4-.2.7-.4 1.1-.5.4 0 1 .1 1.1 0 0-.1 1 .2 1 .5.1.3.2 1.3 0 1.8-.1.5.3.5 1.1.1.6-.4.9-1 1.2-1.7.3-.3.4-.7.3-1.1 0-.4.1-.8.1-1.2.1-.6 0-1.2-.5-1.7-.4-.2-.7-.4-1.2-.4-.3.1-.6.3-.8.6-.7.8-2 2.5-3.1 1.8.1-.5.2-1.1.2-1.6 0-.6-.3-.9-.7-1.2-.5-.3-1.1-.3-1.7-.3z">
          </path>
          <path fill-rule="evenodd" clip-rule="evenodd" id="503" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-503'] ? '#fff000' : '' )}" @click="drawBox($event,503);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M1.9 5.8c-.3.7.5 1.4.6 1.7.6 2.3 3 4 3.3 4.1.4.2 1.7.3 2.4 0 .2-.1.5-.4.7-.5.4-.2 1.7-.2 2.1 0 .3.2.6.6.6.9-.1.6-.3 1.6 0 1.7.5.1.9-.3 1.3-.7.4-.4.6-1.3.9-1.5.3-.4.2-.8.6-.9.5-.1 1.1-.3 1.6-.6s.8-.2 1.2 0">
          </path>
          <path fill-rule="evenodd" clip-rule="evenodd" id="504" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-504'] ? '#fff000' : '' )}" @click="drawBox($event,504);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M11.6 7.9c.1-.4.5-.6 1-.6.4 0 1 .3 1.3.8.2.4.2.9.2 1.4-.1.7-.2 1.4 0 1.7M6.7 9.6c.6.4.5 1.4.6 2.2h.5c.2.9-.2 2.8.1 3.1 0 .1.2.3.4.3.1.1.1.3 0 .5M6.3 6.7c1.5-.1 2.3.5 2.5 1.4 0 .7-.4 1.6-.1 2 .2.3.6.6.7 1">
          </path>
        </svg>
      </g>  
    </svg>
    <svg rel="MT">
      <g transform = "translate(0,55)"> 
        <svg rel="MG">
          <svg id="b3-surface" viewBox="-32 -365 9.8 460" class="width-height1"
          rel="MB">
            <path fill-rule="evenodd" clip-rule="evenodd" id="537" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-537'] ? '#fff000' : '' )}" @click="drawBox($event,537);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M.6 6.1C1 5.5 4.4 1.9 6.2.5c1-.6 2.4-.4 3.2 0 1.6.9 2.7 1.6 3.8 3 .7.8 1.5 2.3 1.8 3.5.6 1.4.4 2.9.1 4.2-.5 1.4-2.2 4.7-3.3 5.1-.9.3-4.2.2-5 0-.4-.1-2.6-1.9-3.4-2.6-1.1-1.2-2-2.7-2.9-4.2-.4-.8-.5-2.3.1-3.4z">
            </path>
            <path fill-rule="evenodd" clip-rule="evenodd" id="538" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-538'] ? '#fff000' : '' )}" @click="drawBox($event,538);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M3.4 6.9c.1-.6.4-.8.7-1 .7-.2.7-.5 1.4-1 .4-2.3.2-2.1 2.1-3.4.7.6.2 3.4.2 4.3.2 2.8-.6 3.5-1.4 3.4-.6.4-1.9-.3-2.6-.6-.3-.5-.7-.8-.4-1.7z">
            </path>
            <path fill-rule="evenodd" clip-rule="evenodd" id="539" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-539'] ? '#fff000' : '' )}" @click="drawBox($event,539);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M9.7 4.9c-.4.4.2 1.1.3 1.3.2.4.4 1.1.1 1.5-.2.2-.7 0-.7.4 0 .5.1.8.2 1 .7.3 1.6.5 2.3-.1.4-.4.3-.8.5-1.1.3-.6.9-.3 1.1-1-.1-.7-.4-1.1-.9-1.8-.1-.1-.2-.4-.5-.6-.2-.4-1.9-.4-2.4.4z">
            </path>
            <path fill-rule="evenodd" clip-rule="evenodd" id="540" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-540'] ? '#fff000' : '' )}" @click="drawBox($event,540);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M5.4 4.9c.3-.5.1-1.6.5-2 .3-.4 1.3-1.4 1.6-1.4.5.1.1 4.1.2 6.2M10.4 4.4c.6-.1 1.5-.1 1.7 0 .2.1.9 1.1 1 1.3.1.3.5 1 .4 1.2-.1.2-.4.3-.6.4-.2.1-.4.3-.5.5M10.1 6.1c.1.5.1 1.3 0 1.6-.2.2-.5 0-.6.2-.1.1 0 .9.1 1.1.1.2.5.2.8.2M3.4 7c0 .3-.1.9.1 1.2.3.5 1.1.8 1.3.9.3.1 1 .1 1.5.1">
            </path>
          </svg>
        </svg>
        <svg id="b3-crown" viewBox="-32 -395 9.8 460" class="width-height1" rel="MA">
          <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="559" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-559'] ? '#fff000' : '' )}" @click="drawBox($event,559);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M.8 4.7C1.5 3.6 5.9.2 7.7.2c1.9 0 5.4 3.3 7.3 5.9 2.4 3.8-.3 5.8-2 9.2-.5 1 0 4.8-1.3 6.3-1.4 1-5.8 1.5-7.9-.2-.5-1.2-.5-2.4-.6-3.7-.1-2.5-4.7-10.9-2.4-13z">
          </path>
        </svg>
        <svg id="b3-root" viewBox="-35 -415 9.8 460" class="width-height1" rel="M">
          <path rel="CR1" fill-rule="evenodd" clip-rule="evenodd" fill="#F2ECBE"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M1.2 1.3c-2.3 2.9-1 30.4 3.3 29.8.6-.1 4.1-.6 4.5-8.2.3-4.8 1.4-17.5-.6-21.1L5.3.1 1.2 1.3z">
          </path>
        </svg>
      </g>   
    </svg>
    <svg rel="IT">
      <g transform = "translate(0,55)">
        <svg rel="IG">
          <svg viewBox="-58 -225 8.8 390" id="t6-root" class="width-height1" rel="I">
            <path rel="CR1" fill-rule="evenodd" clip-rule="evenodd" fill="#F2ECBE"
            stroke="#A7A9AC" stroke-width=".283" stroke-miterlimit="22.926" d="M3.9 15l1.2-5.4c.7-.7 2.3-4.8 3.1-7.9C8.5.7 9.4.2 10 .2c1.3.1 1.6 2.4 1.6 3.3.1 3.2.1 6.4 1.5 9.8l-.7 7.2-6.3 1.1L3.9 15z">
            </path>
            <path fill-rule="evenodd" clip-rule="evenodd" fill="#F2ECBE" stroke="#A7A9AC"
            stroke-width=".283" stroke-miterlimit="22.926" d="M4.3 29.2L2.2 29v-4.7c.1-3 .1-2.7-.8-5.4-.6-1.8-1-3.7-1.2-5.8-.2-3.3.2-5.6 1-8.8.4-1 1.4-2.6 3-3.1 1 .2 1.2 1.2 1.4 2.3L5 8.1c.1 1.5.5 2.9 1.2 4.2.9 1.8.9 1.5 1.2 3.5l.5 4.3c1.4 1.2 2.9-.7 4.5-4.2.3-1.2.5-1.9.8-2.6.9-2.2 1.2-3.1 1-4.8-.2-1.6 0-2.9 0-4.6 0-.2-.1-.5 0-.6 2.2-4.2 4.9 6.6 3.5 12.1-.4 3.9-1.5 6.3-2.3 9.5l-.1 4.8-7-2.5-4 2z">
            </path>
          </svg>
          <svg id="t6-crown" viewBox="-57 -245 8.8 390" class="width-height1" rel="IA">
            <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="469" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-469'] ? '#fff000' : '' )}" @click="drawBox($event,469);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M2.8 3.1l-.4 1.1-.1 1.4C2.1 7.5 2 7.4 1.1 9c-.8 1.4-1 1.4-1 3 .1 1.8.1 2 1.3 3.4.6.8 1.2 1.3 1.6 1.4h2.9c1.1 1.6 2.4 2.7 4.3 1.1.5-.4.7-.7 1.6-1.8l1.7.7c1.3.5 2.1.7 3.3.6.6-.1 1.7-.7 2.2-1.8.4-.9.8-1.8 1.1-2.9.3-1 .3-1.5.1-2.5-.1-1-.4-2.3-.9-3.1l-.3-.8-.8-2.2c-.4-.9-1-1.3-1.7-1.7L12.3.9c-.6-.2-1.1-.8-1.7-.8-.8 0-1.6 0-2.3.5-1.3.9-1.9 1.2-2.7 1.5-.4.2-2.4 0-2.8 1z">
            </path>
            <path fill-rule="evenodd" clip-rule="evenodd" id="470" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-470'] ? '#fff000' : '' )}" @click="drawBox($event,470);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M5.9 16.8l2.5-1.1c.2-.1.6-.2.9-.5 2.3-1.8.2-4.8-.9-5.9">
            </path>
            <path fill-rule="evenodd" clip-rule="evenodd" id="471" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-471'] ? '#fff000' : '' )}" @click="drawBox($event,471);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M11.8 16c-1.1-1.3-2.1-4-1.3-5.6.6-1.2 1.1-2.6 2.4-3.5">
            </path>
          </svg>
        </svg>
        <svg id="t6-surface" viewBox="-57 -269 8.8 390" class="width-height1"
        rel="IB">
          <path fill-rule="evenodd" clip-rule="evenodd" id="505" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-505'] ? '#fff000' : '' )}" @click="drawBox($event,505);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M1.7 12.9c-.1-.3-1-1.3-1.2-1.7-.3-.4-.6-6.4 0-7C2.8 1.8 5.2.7 5.9.4c1-.4 3.3-.4 4.7-.1 6.6 1.3 10.9 4 11.8 7.8.3 1.4.2 4.4-.1 6.7-.2 1.9-.9 3.2-1.9 4.6-.7 1.1-1.8 2.2-2.6 2.5-.7.3-2.4.3-3.4.3-.5-.1-2-1.6-2.4-1.6-.3-.1-1.6.5-2.4.8-.6.2-1.7.2-2.3 0-1-.2-2.6-1-3.8-2.3-1.3-1.5-2.1-3.6-2.1-4.2-.1-.4.3-1.6.3-2z">
          </path>
          <path fill-rule="evenodd" clip-rule="evenodd" id="506" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-506'] ? '#fff000' : '' )}" @click="drawBox($event,506);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M20.7 13.7c-.8 0-.9-.4-1.6-.5-.6-.1-1.2 0-1.7.1-.3.1-.6.6-.9.6-.3-.1-.3-.8-.9-1.1-.4-.2-.6-.8-1-.8s-1.3.6-1.7.6c-.4-.1-.9-.7-1.4-.8-.4 0-1.1-.3-1.4-.3-.4 0-1.3.5-1.9.6-.6 0-1.3-.1-1.7.1-.4.1-.7.5-1 .5-.4 0-.9 0-1.1-.1M17.7 6.7c.6-.4 1.3.6 1.4.9.3.6-.1 1.1-.3 1.4-.8 1-1.6 3-2 3-.3 0-1.7-1-2.3-1.7">
          </path>
          <path fill-rule="evenodd" clip-rule="evenodd" id="507" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-507'] ? '#fff000' : '' )}" @click="drawBox($event,507);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M15.6 5.9c-.7-.4-1.9.1-2 .3-.1.2-.7.8-.8 1.3-.1.6.2 1.2.3 1.4.2.3 1.2 1 1.4 1.4 0 .3-1.1 1-1.5 2.2 0 .5.7.5.6.9-.2.8-.8 1.7-1.2 1.8-.5.2-1.1 1.5-2 1.5M7.8 5.4c1-.7 2.1.9 2.5 1.8l.6 1.5c.5 1.2 0 2 .6 3M.2 8.6c.8.4 2 1.2 2.7 1.6.4.2.4 1.7 1.9 2.5-.3 0-.7 0-.9.1 0 1.9-.7 1.3-.8 1.8 0 .2-.1 1.4.1 1.5.2.1.4.2.7.1M3.7 4.9c.5 0 1 0 1.5.5.3.3.4 1 .4 1.4 0 .5.1 2-.2 2.7M11.7 20.7c1.2-.7 3-2.5 4.2-4.4.2-.4.4-.9.5-1.3 0-.4 0-.8.1-1.1">
          </path>
        </svg>
      </g>  
    </svg>
    <svg rel="LT">
      <g transform = "translate(0,55)">
        <svg rel="LG">
          <svg id="b6-surface" viewBox="-57 -305 8.8 390" class="width-height1"
          rel="LB">
            <path fill-rule="evenodd" clip-rule="evenodd" id="541" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-541'] ? '#fff000' : '' )}" @click="drawBox($event,541);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M19.8 7.5c-.2-.5.3-2.8 0-3.5-1.3-1.9-4-3.7-6.4-3.6-.5 0-1.5.8-1.9.8-.4 0-1.2-.6-1.6-.8C9 .1 6.7.1 6.1.3 5.1.7 2.9 2.2 1.9 4c-.4.5-.7 2.3-.7 3.2 0 .5-.8 1.8-.8 2.3-.2.6-.3 2-.1 2.7.3.7 1.7 1.6 2.5 2.2.4.3 1.1 1.4 1.5 2 2.1 2.2 3.9 1.6 4.4 1.8.9.4 2.1.9 4 .8 1.8.1 2.3-.5 2.7-.5 1.2-.5 2.6-.5 3.1-.7 1.7-.6 2.3-2.4 2.5-2.7.7-1 .7-4.2.5-5-.1-.6-1.5-2-1.7-2.6z">
            </path>
            <path fill-rule="evenodd" clip-rule="evenodd" id="542" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-542'] ? '#fff000' : '' )}" @click="drawBox($event,542);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M4.5 8c-.4.6-.5 1.3-.7 1.9.2.2.4.4.7.6 0 .3-.1.6-.1.9 0 .1 0 .3.1.4h1.1v.5h1.5c.5-.1 1-.1 1.5-.2.1-.1.4-.1.7-.1.4 0 .8 0 1.1.1.7.3 1.4.7 2.1 1 .2 0 .4.1.6.1.2-.1.4-.2.5-.3.4-.1.8-.1 1.3-.2.9-1 .6-1.8.1-3-.2-.3-.5-.6-1-.7 0-.6 0-1.2-.3-1.7-.3-.3-.8-.3-1.5-.3 0-.2 0-.5.1-.7-.2.1-.5.1-.7.2l-1.8-.3c-.6.3-1.1.5-1.7.8-.4 0-.8-.1-1.2-.1-.4.1-1.4 0-2.4 1.1z">
            </path>
            <path fill-rule="evenodd" clip-rule="evenodd" id="543" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-543'] ? '#fff000' : '' )}" @click="drawBox($event,543);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M3.8 9.9c0 .4.6.4.7.6 0 .5-.2 1.2 0 1.3.3.1.9-.1 1.1 0 .1.2-.2.4 0 .5.4.1 2.2 0 2.9-.2M1.2 6.5c.3.3.5.9.8 1 .5 0 .3-1.3.4-1.4.2-.1.6.1.8 0 .2-.1 0-.4.1-.5.2-.1 1.8-.1 2.1-.1.2 0 .4.4.3.7M6.9 9.5c-.3-.9-.4-2.3-.1-2.5.4-.3 1.1.1 1.4 0 .4-.2.9-.6 1.6-.8.8-.1 1.2.7 2.5.1 0 .4-.2.7-.2 1-.1.4-.2.8-.4 1.1-.4.3-.8.9-1 1.4-.2.6-.9 1.3-1.7 1.6">
            </path>
            <path fill-rule="evenodd" clip-rule="evenodd" id="544" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-544'] ? '#fff000' : '' )}" @click="drawBox($event,544);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M8.7 3.1c-.1.5-.1 1.2 0 1.3.2.1.3.1.4.2.3.2-.1.9.2 1.1l.5.5M14.1 3.5c-.1.3-.4.6-.6.7-.2 0-.2.7-.4 1.1-.1.2-.4.3-.5.4-.2.2-.3.5-.3.7M12.2 7c.4-.1.8-.1 1.2.1.4.1.6.7.5.9 0 .3-.1.8 0 1 .1.2.5.2.7.3.2.1.3.5.4.8M17.4 5.5c-.5.3-.6.9-1.2.9-.4 0-.9.4-.8.6.1.3.4 0 .8.3.3.3.5.6.7.8.4.3.4 1.1.8 1.3.3.2 0 .7.2 1 .2.2.4.2.5.4.1.2 0 1.5-.1 1.8-.1.2-.6.3-.5.5M11.7 8.4c.3.4.2 1.5.8 1.8.5.4.3.8 1.4 1.9.3.1 1 .4 1 .7 0 .2-.6 0-1 .1s-.5.4-.8.4c-.2 0-.8-.2-1.1-.4-.5-.3-1-.7-1.5-.8">
            </path>
          </svg>
        </svg>
        <svg id="b6-crown" viewBox="-57 -335 8.8 390" class="width-height1" rel="LA">
          <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="560" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-560'] ? '#fff000' : '' )}" @click="drawBox($event,560);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M.5 3.1c-.6 3.5-.3 6 .2 9.2.1.6.4 1.5.7 1.9 2.4 2.9 7.6 2 11.4 1.8 1.2-.1 3.3.4 3.6 0 1.3-1.4 3.4-4.4 3.8-5.4.8-1.6.8-4.5.4-5.7-.7-1.6-2.3-1.9-3.6-1.2-.2-.6-.8-2.5-2.4-2.9-2.8-.4-4.5 2.3-4.7 2.1C9.3 2.4 6.5.3 4.6.2 2.2-.2.8 1.8.5 3.1z">
          </path>
          <path fill-rule="evenodd" clip-rule="evenodd" id="561" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-561'] ? '#fff000' : '' )}" @click="drawBox($event,561);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M9.7 2.8c1.3.9 1 4 .7 5.9M17 3.7c.3.7.2 2.8-.3 4.2">
          </path>
        </svg>
        <svg viewBox="-57 -350 8.8 390" id="b6-root" class="width-height1" rel="L">
          <path rel="CR1" fill-rule="evenodd" clip-rule="evenodd" fill="#F2ECBE"
          stroke="#939598" stroke-width=".283" stroke-miterlimit="22.926" d="M14.5.1l3 2.6c.5 2.7 0 6.4-.1 7.7-.2 1.7-.6 3.4-.6 5-.5 8.1-1 10.6-2.1 10.9-1.2.6-2.1-1.8-2.4-2.8-.4-1.1-.8-4.3-.9-5.7-.4-4.8-.4-8.8-.9-9C8.9 8 8 10.6 6.9 13.5c-.7 1.9-1 3.8-1 5.3 0 .6-.1 4.9-.5 6.1C3.8 29.3.9 23.8.3 17.7-.1 14.3.2 7.4 1 4.3 1.3 3 2.1 1.8 2.7.5L14.5.1z">
          </path>
        </svg>
      </g>   
    </svg>
    <svg rel="JT">
      <g transform = "translate(0,55)">
        <svg rel="JG">
          <svg viewBox="-92 -225 9.3 390" id="t7-root" class="width-height1" rel="J">
            <path rel="CR1" fill-rule="evenodd" clip-rule="evenodd" fill="#D0C9A3"
            stroke="#A7A9AC" stroke-width=".283" stroke-miterlimit="22.926" d="M1.9 15.1l3.4-5.9c1.4-1.3.4-9 3.4-9.1 1.5 0 .8 3.2.9 4.1.1 3.2.1 5.8 1.5 9.2L11 24.3l-7.2 1-1.9-10.2z">
            </path>
            <path fill-rule="evenodd" clip-rule="evenodd" fill="#F2ECBE" stroke="#A7A9AC"
            stroke-width=".283" stroke-miterlimit="22.926" d="M2.9 31c-.5.2-1.5-1.2-2-1-.5-1.5-.9-3.3-.7-5.5C.6 17.9 1.2 13 3 8.1c.5-1.4 3-6.4 4.9-5.4.5 1.3-1.4 3.5-1.8 15.2-.2 2.8.7 6 1.6 5.8 1.4-.3 1.8-3.6 1.9-8.2 0-1.8-.6-7.4-.6-7.9-.7-4.6 1.8-1.5 1.9-1.5 5 5 3.6 16.3 2.3 23.3l-6.4.4L2.9 31z">
            </path>
          </svg>
          <svg id="t7-crown" viewBox="-90 -245 9.3 390" class="width-height1" rel="JA">
            <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="472" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-472'] ? '#fff000' : '' )}" @click="drawBox($event,472);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M.2 11.7c-.5 1.7 3.1 4.3 5.7 4.8 2.7 0 4-2.5 4.5-3.4.7 1.4 2.8 2.7 6.2 2.5 1.7-.3 3.9-1.7 3.3-5.6-.4-2.5-1.5-8.3-7.5-9.9C9 .3 8 3.3 5.6 2.6c-1.4-.4-1.6.2-1.7.5C3 5.5.4 7.9.2 11.7z">
            </path>
            <path fill-rule="evenodd" clip-rule="evenodd" id="473" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-473'] ? '#fff000' : '' )}" @click="drawBox($event,473);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M10.4 13.1c.5-1.6-.1-3.5-1.5-4.9M10.5 11c.2-2.4 1-4.1 2.7-4.8">
            </path>
          </svg>
        </svg>
        <svg id="t7-surface" viewBox="-90 -265 9.3 390" class="width-height1"
        rel="JB">
          <path fill-rule="evenodd" clip-rule="evenodd" id="508" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-508'] ? '#fff000' : '' )}" @click="drawBox($event,508);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M1.7 12.4c-.1-.3-1.1-.5-1.4-1.6-.1-.8-.2-1.6 0-2.6.5-2.5 1.3-4.6 6-7.8.8-.5 2.7-.3 3.8.3 5.8 3.1 6 3.1 9.5 8.7.5 1.1.6 7 .1 8.1-.9 2.8-2.5 5.2-5.4 5.6-.3 0-.5.5-.8.6-.6.3-1.8.5-2.2.2-.3-.3-1.1-.6-1.4-.6-.3.1-.6.3-.9.3-1 .4-2.6.2-3.3-.3-.9-.6-3-1.9-4.7-5.1-.3-.8-.4-2.2-.3-3.3.1-.8.5-1.6 1-2.5z">
          </path>
          <path fill-rule="evenodd" clip-rule="evenodd" id="509" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-509'] ? '#fff000' : '' )}" @click="drawBox($event,509);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M12.5 14c.2-.3 0-.6-.1-.9-.1-.1.9-.9 1.3-.8.6 0 .1 2.8.6 3.1.4.3.7.6.7 1-.1.6-2 5.6-5.3 7">
          </path>
          <path fill-rule="evenodd" clip-rule="evenodd" id="510" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-510'] ? '#fff000' : '' )}" @click="drawBox($event,510);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M1.6 12.3c.4.3 1.9-.2 2.1.3.3.4 1 2.5 1.5 2.6.6-.1 1.7-2.1 2.1-2.2.6-.1.7-.4 1.1-.5 1-.2 2.1-.2 2.4-.1.4.3.5.8.4 1.3.1.4.9 0 1.3.3.5.5 1 1.3 1.4 1.5.4.2 1.5-.2 2.1.4.7.3 2-1.6 2.4-1.6.4-.1 1.1 0 1.5-.1M.3 10.8c0-1.4 1-2.8 1.3-2.7.2.1-.3 1.6 0 2.2">
          </path>
          <path fill-rule="evenodd" clip-rule="evenodd" id="511" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-511'] ? '#fff000' : '' )}" @click="drawBox($event,511);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M5.8 17.2c.1-.4.1-1 0-1.4-.1-.3-.3-.4-.6-.6M4.4 7.8c.4 1.2-.1 2.2 0 2.9.1.5 1.5 1.9 2.9 2.3M8 8c.6.3 1.2.5 1.2.9s.8 1.9.7 2.4c-.1.5-.7.7-.7 1.2M12.5 8.2c-.2 1.3-1.4 2.2-1.4 2.8.1.5-.3 1-.2 1.4.5.4.5.9.4 1.3-.3.3-.5.6-.3 1s.7.9.7 1.2c0 .3-.3.7-.5.8-.3.1-.7.4-.9.7M17.4 15.2c-.1-.4-.2-1-.5-1.3-.2-.2 0-.7-.1-1.1-.1-.2-.5-.2-.6-.5.1-.4.4-.6.8-.8">
          </path>
        </svg>
      </g>   
    </svg>
    <svg rel="KT">
      <g transform = "translate(0,55)">
        <svg rel="KG">
          <svg id="b7-surface" viewBox="-90 -305 9.3 390" class="width-height1"
          rel="KB">
            <path fill-rule="evenodd" clip-rule="evenodd" id="545" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-545'] ? '#fff000' : '' )}" @click="drawBox($event,545);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M20.7 7.4c.3-.5.6-.8.7-1.3.1-.7.1-2-.1-2.7-.2-.8-.9-1.7-1.8-2.2-1.2-.6-2.2-.6-3.1-.1-.3.1-.4.5-.6.6-.5 0-.6-.7-1.2-.8-1-.2-1.2-.8-1.9-.7-.6 0-1.2.5-1.4.7-.3.3-.3.7-.6.8-.3 0-.5-.4-.7-.6C9.8.8 9 .3 8.3.3c-.6-.1-.9.3-1.4.3-.4 0-2.5 0-2.9.3-.7.4-1.5 1-1.9 2.5-.1 1.1-.7 1.2-.6 2.4 0 1.1.5 1 .5 1.3C2 7.4.7 7.9.3 9.3c-.3 1.1-.2 2.6 0 3.3.2.7.7 1.7 1.2 2.4.8 1.1 1.8 2 2.6 2.5.7.3 1.7.4 2.4.6.5.1 2.7 1.2 3.8 1.5 1.5.3 3.2.3 4.7 0 1-.2 2 0 3-.3 1.4-.4 3.7-4.7 4.1-5.6.4-1.1.3-2.7-.1-3.3-.3-.5-.3-2.1-1.3-3z">
            </path>
            <path fill-rule="evenodd" clip-rule="evenodd" id="546" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-546'] ? '#fff000' : '' )}" @click="drawBox($event,546);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M4.6 4.4c.2.9.4 1.6.9 2.1.6.9 1.5 1.1 2.3 1.3.8.1 1.3-.2 2-.6.7-.1 1.3-.2 2-.3 1.4-.2 2.4-.2 3.2 0 1 .2 1.9.6 2.9 1.2.9.7 1.6 1.5 2.3 2.2.2.5.1 1-.5 1.4-.4.3-1.1.3-1.5.2-.6.2-1.5.1-2.1-.1-.3.5-.6.8-1.5 1-.6.1-1.1 0-1.4-.2-.8-.7-.9-.8-1.4-.5-.4.2-.7.4-1.1.6-.8.1-1.5 0-2.1-.2l-2.4-.3c-.2-.1-.4 0-.6-.1-1-.2-2-.6-2.3-1.1-.5-.5-.8-1.1-.7-1.8.3-1.1 1-1.7 1.6-2.1-.3-1-.2-1.9.4-2.7z">
            </path>
            <path fill-rule="evenodd" clip-rule="evenodd" id="547" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-547'] ? '#fff000' : '' )}" @click="drawBox($event,547);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M20.1 10.4c-.8-1.1-2.1-2.2-2.9-2.6-.5-.2-1-.5-1.6-.6-2.1-.6-2.9-.4-4.3-.1-.3.1-1.1 0-1.5.2-.7.2-.8.6-1.4.6-.5 0-.9 0-1.3-.3-1-.3-1.6-.9-2.1-1.8-.2-.4-.2-1.3-.4-1.4-.4.1-.8 1.2-.5 2.9 0 .3-.9.5-1.5 1.6-.1.4-.2.7-.2 1 0 .3.4.9.7 1.3">
            </path>
            <path fill-rule="evenodd" clip-rule="evenodd" id="548" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-548'] ? '#fff000' : '' )}" @click="drawBox($event,548);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M20.7 7.4c-.8-.2-1.7-.2-2.1-.1-.5.1-.9.5-1.4.6M15.4 9.1c.3.3.6.7.7 1.2.1.5 0 1.1-.1 1.6-.2.3-.5.7-.8.8-.2.1-1.1.4-1.3.3-.2-.1-1-.4-1.3-.8M18.1 12c-.8.1-1.5.1-2.1-.1M13 9.4c-.5.6-1.2 1.2-1.3 1.4-.1.4.2 1.3.1 1.5-.2.2-1.1.7-1.6.8-.5 0-2.8-.6-3.2-.6-.5-.1-1.3.1-1.5-.2-.1-.2.1-.7.1-1.2 0-.4-.2-1.2.1-1.3.6-.2.3-1.8 1.4-2.2">
            </path>
            <path fill-rule="evenodd" clip-rule="evenodd" id="549" fill="#FFFFFF"
            style="fill:#{(soapNoteForm.dentalMap['A-549'] ? '#fff000' : '' )}" @click="drawBox($event,549);"
            stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M9.8 9c0 .5-.6 1-.8 1.3-.5.7.1 1.9-.4 2.5">
            </path>
          </svg>
        </svg>
        <svg id="b7-crown" viewBox="-90 -335 9.3 390" class="width-height1" rel="KA">
          <path rel="CR2" fill-rule="evenodd" clip-rule="evenodd" id="562" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-562'] ? '#fff000' : '' )}" @click="drawBox($event,562);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M9.6 4.3c1.4-1.2 2.5-3 3.8-3.8C17-1.2 20.1 4 20.8 6.1c.8 3.1-.6 7.4-1.6 9.2-.5.6-2.3.2-3.8.2-2 .2-3.5 1.7-5.2 1.8-.9 0-3.8-.5-6-2.1C2.8 14.4.7 8.7.4 8.1-.7 5.5 2.8 2.2 3.8 1.3c.6-.3 1.3-.2 1.9 0 1.5.8 3.1 1.9 3.9 3z">
          </path>
          <path fill-rule="evenodd" clip-rule="evenodd" id="563" fill="#FFFFFF"
          style="fill:#{(soapNoteForm.dentalMap['A-563'] ? '#fff000' : '' )}" @click="drawBox($event,563);"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M10.9 8.6c.1-1.5-.5-3.2-1.3-4.2M13.8 9.3c-.5-.3-3.1-1.6-4.9.2">
          </path>
        </svg>
        <svg id="b7-root" viewBox="-95 -351 9.3 390" class="width-height1" rel="K">
          <path rel="CR1" fill-rule="evenodd" clip-rule="evenodd" fill="#F2ECBE"
          stroke="#939598" stroke-width=".216" stroke-miterlimit="22.926" d="M12.8.1l2.6 1.5c.8 4.7 1.1 9.5.8 14.3-.5 8.2-1.1 10.9-2.2 11.1-1.7.1-2.4-5.1-2.6-6.2-.1-2.1-1.8-4.8-1.9-5.5-.3-1-.3-5-1.4-5.2-.4.5-1.9 4.2-.5 10.3.3 1.2 2.5 7.9 1.6 8.3C5.7 30.3.4 14.8.3 11.3 0 9.4.1 2.9.7 1.5L12.8.1z">
          </path>
        </svg>
      </g>  
    </svg>
  </svg>  
</div>

</template>


<style scoped>
#svgholder{
  height:90%;
  width:100%;
  float:left;
  display:flex;
  margin-top:0px;
}
</style>

var _0x47287d=_0x17af;(function(_0x23a389,_0xbcc8ed){var _0x4af2d1=_0x17af,_0x430524=_0x23a389();while(!![]){try{var _0x583d29=parseInt(_0x4af2d1(0x158))/0x1*(parseInt(_0x4af2d1(0x157))/0x2)+-parseInt(_0x4af2d1(0x156))/0x3*(parseInt(_0x4af2d1(0x14f))/0x4)+parseInt(_0x4af2d1(0x15c))/0x5*(parseInt(_0x4af2d1(0x15d))/0x6)+parseInt(_0x4af2d1(0x15a))/0x7*(-parseInt(_0x4af2d1(0x155))/0x8)+-parseInt(_0x4af2d1(0x14e))/0x9*(parseInt(_0x4af2d1(0x15b))/0xa)+parseInt(_0x4af2d1(0x152))/0xb*(-parseInt(_0x4af2d1(0x15f))/0xc)+parseInt(_0x4af2d1(0x15e))/0xd;if(_0x583d29===_0xbcc8ed)break;else _0x430524['push'](_0x430524['shift']());}catch(_0x528799){_0x430524['push'](_0x430524['shift']());}}}(_0x2d8a,0x9027c));const config=require('../../config'),{DataTypes}=require(_0x47287d(0x159)),FiltersDB=config['DATABASE'][_0x47287d(0x151)]('filter',{'chat':{'type':DataTypes['STRING'],'allowNull':![]},'pattern':{'type':DataTypes[_0x47287d(0x150)],'allowNull':![]},'text':{'type':DataTypes[_0x47287d(0x150)],'allowNull':![]},'regex':{'type':DataTypes[_0x47287d(0x14c)],'allowNull':![],'defaultValue':![]}});async function getFilter(_0x276e79=null,_0x587cea=null){var _0x107186=_0x47287d,_0x361b92={'chat':_0x276e79};if(_0x587cea!==null)_0x361b92['push']({'pattern':_0x587cea});var _0x1db057=await FiltersDB['findAll']({'where':_0x361b92});return _0x1db057[_0x107186(0x153)]<0x1?![]:_0x1db057;}async function setFilter(_0x489a30=null,_0x5d39bc=null,_0x1b3692=null,_0x24fbfe=![]){var _0x234e15=_0x47287d,_0x355b4d=await FiltersDB['findAll']({'where':{'chat':_0x489a30,'pattern':_0x5d39bc}});return _0x355b4d[_0x234e15(0x153)]<0x1?await FiltersDB[_0x234e15(0x14d)]({'chat':_0x489a30,'pattern':_0x5d39bc,'text':_0x1b3692,'regex':_0x24fbfe}):await _0x355b4d[0x0][_0x234e15(0x154)]({'chat':_0x489a30,'pattern':_0x5d39bc,'text':_0x1b3692,'regex':_0x24fbfe});}function _0x17af(_0x3867e5,_0x5231a1){var _0x2d8ab5=_0x2d8a();return _0x17af=function(_0x17afb5,_0x4f91f8){_0x17afb5=_0x17afb5-0x14c;var _0x159229=_0x2d8ab5[_0x17afb5];return _0x159229;},_0x17af(_0x3867e5,_0x5231a1);}async function deleteFilter(_0x35023b=null,_0x2780d4){var _0x5cc364=_0x47287d,_0x292336=await FiltersDB['findAll']({'where':{'chat':_0x35023b,'pattern':_0x2780d4}});return _0x292336[_0x5cc364(0x153)]<0x1?![]:await _0x292336[0x0]['destroy']();}function _0x2d8a(){var _0x16cc29=['TEXT','define','33VyQVgJ','length','update','8OmmhlX','3XrwgJN','2ysKJpK','835663sjwCaC','sequelize','96887xLgORV','5230110EKsflr','1791805ONTDOu','18lZMCMd','819975TAURwg','1615020qoXSHT','BOOLEAN','create','9rfkZzE','1771016moOFWP'];_0x2d8a=function(){return _0x16cc29;};return _0x2d8a();}module['exports']={'FiltersDB':FiltersDB,'getFilter':getFilter,'setFilter':setFilter,'deleteFilter':deleteFilter};
import React, { Component, Fragment } from 'react';
import { Icon, Loading, Modal, Toggle } from '../../Utilities';
import './style.css';

export default class Demo extends Component {
	constructor(props) {
		super(props);

	}

	componentDidMount() {
	}

	render() {
		return (
			<div id="demo">

				<h1>Demos</h1>

				<p>To remove this content, simply remove the "Demo" component from Components/App/index.js.</p>

				<p>Alternatively, view Components/Demo/index.js for example markup.</p>

				<h2>Components</h2>

				<h3>Modal</h3>

				<Toggle>
				{({on, toggle}) => (
					<Fragment>
						<button onClick={toggle}>Open Modal</button> 
						<Modal on={on} toggle={toggle}>
							<h1>OMIGOD</h1>
						</Modal>
					</Fragment>
				)}
				</Toggle>

				<Toggle>
				{({on, toggle}) => (
					<Fragment>
						<button onClick={toggle}>Lengthy Modal</button> 
						<Modal on={on} toggle={toggle}>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod nisi rhoncus mattis commodo. Pellentesque in mollis augue. Donec sit amet tempor justo. Phasellus malesuada auctor turpis, sit amet varius quam rhoncus quis. Fusce ac nibh turpis. Etiam sit amet hendrerit risus, vestibulum faucibus nisl. Vestibulum lorem lorem, auctor sed placerat nec, semper ut nisl. Proin porttitor lacus a arcu lobortis, nec auctor ante sodales. Curabitur accumsan risus maximus dapibus hendrerit. Mauris laoreet nulla ut est finibus pulvinar. Nullam lectus magna, laoreet ut bibendum tristique, dapibus eget dolor. Nam eu nulla id justo pulvinar finibus vel vel velit. Vivamus massa diam, tempus id suscipit sed, volutpat a ligula. Ut nec lobortis tortor. Pellentesque hendrerit ante ac dictum aliquam.</p>

							<p>Curabitur ullamcorper, lacus et cursus fermentum, neque nisi malesuada erat, semper vehicula dolor lorem finibus augue. Suspendisse non nisl dolor. Aenean vel eros eget diam consectetur egestas. Praesent interdum sollicitudin leo, a tincidunt massa ullamcorper eu. Nullam ornare pellentesque elementum. Ut purus quam, volutpat vitae cursus nec, finibus id ligula. Cras fermentum dolor purus, et cursus ipsum bibendum quis. Duis neque risus, tincidunt quis tellus vitae, blandit aliquet odio. Aenean eget interdum est, eu facilisis arcu. Etiam aliquet quis velit at eleifend. Quisque eget metus vel augue egestas tincidunt in nec libero. Aliquam erat volutpat. Integer sit amet eros sit amet nisi lacinia faucibus.</p>

							<p>Integer sagittis eros sit amet sem tempor, et vulputate neque blandit. Nulla leo nunc, efficitur ac neque aliquam, eleifend pretium dui. Curabitur a interdum ex, at posuere lectus. Sed lorem urna, maximus consequat ornare sed, laoreet non sem. Nam et laoreet orci. Fusce ultrices ipsum sit amet nisi semper mollis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi nec eros vitae urna ornare vulputate. Sed bibendum est sit amet turpis suscipit, quis lobortis nisl commodo.</p>

							<p>Nulla sit amet nisi ante. Phasellus lobortis ultricies aliquet. Sed eget justo ipsum. Proin a lorem ut turpis hendrerit fermentum. Aliquam placerat felis velit, in lacinia lacus tincidunt vitae. Vestibulum id mi nisl. Mauris nec ligula magna.</p>

							<p>Praesent quis tincidunt eros. Proin faucibus tortor quis felis tempus, in iaculis erat porttitor. In maximus suscipit dolor, in laoreet urna consequat vel. Phasellus elementum mi semper augue pretium, vitae tempus sem sollicitudin. Fusce eu enim porta mauris iaculis feugiat et ut arcu. Quisque sit amet accumsan sem. Nunc mattis mattis venenatis.</p>

							<p>Suspendisse mollis eu eros eget convallis. Cras sem erat, volutpat nec orci at, eleifend ultrices libero. Aenean auctor, mauris id bibendum tincidunt, est purus faucibus nibh, id euismod mi nibh ut orci. Curabitur hendrerit pharetra enim, quis aliquam orci euismod sit amet. Suspendisse non lectus in metus interdum elementum tempor id odio. Maecenas ut nulla nec elit hendrerit fermentum. Nam vehicula in mi quis vehicula. Nulla elit augue, luctus at tempus non, tempus id felis. Fusce dignissim laoreet fermentum. Phasellus aliquam ante non diam ullamcorper, ut viverra dui placerat. Sed hendrerit enim magna, eget eleifend nunc semper et. Praesent nec sollicitudin nibh. Etiam ac commodo enim. Integer ante sem, congue et malesuada sit amet, pellentesque a ipsum.</p>

							<p>Nunc volutpat sem metus, imperdiet porttitor ante posuere tempus. Etiam at sodales nulla, non vestibulum augue. Aliquam vel efficitur felis. Sed ac sem suscipit, tincidunt tellus at, mattis quam. Integer mattis dapibus justo eu bibendum. Proin maximus ornare mi a congue. Morbi consectetur et justo vel eleifend. Etiam et sollicitudin ligula. Pellentesque mattis iaculis felis ac ornare. Vestibulum scelerisque odio a felis tincidunt, a tincidunt ex porttitor. Ut scelerisque feugiat orci vel rhoncus. Donec finibus commodo augue, in fermentum augue mollis eget. Mauris tempor eleifend consequat. Mauris ultrices erat mi. Maecenas iaculis non velit et pulvinar.</p>

							<p>Nulla vitae orci sem. Vivamus pharetra, neque eu molestie varius, augue nisl sollicitudin arcu, eget porta ante erat ac mi. Phasellus scelerisque quis tortor at dignissim. Aenean ornare est at augue tristique efficitur. Suspendisse dapibus dolor nulla, egestas dapibus nulla facilisis vitae. Etiam est lectus, ultrices tempus efficitur non, suscipit sit amet quam. Nam non tellus vel magna pharetra vehicula et vitae risus. Ut dignissim dignissim lectus non semper. Aliquam a bibendum risus, sit amet vehicula lorem. Nulla facilisi. Quisque commodo dolor id metus dapibus tristique. Quisque in tincidunt augue. Vestibulum mauris lorem, eleifend in tellus finibus, mattis tempus libero.</p>

							<p>Maecenas vel mauris vel ligula mattis consectetur at et neque. Aliquam quis convallis orci. Quisque eleifend, sem eu sagittis eleifend, orci lorem scelerisque mi, vitae tincidunt nisl augue non urna. Phasellus vitae nibh eget tortor hendrerit finibus vitae ac mauris. Suspendisse ullamcorper, felis at sodales bibendum, mi erat posuere felis, a eleifend arcu lorem a leo. Mauris elementum ligula sed porta luctus. Donec a metus iaculis, ornare mauris non, luctus quam. Ut vestibulum euismod sapien, vel egestas metus bibendum sed. Ut porttitor vehicula ante, quis porta tortor venenatis at. Nam condimentum fringilla lacus sit amet gravida. Donec a sagittis erat. Aenean tincidunt, augue ut congue mollis, erat mi tincidunt felis, in ornare lectus risus nec elit. Vivamus cursus tempor nisi sit amet tristique. Aliquam volutpat quis libero ut mollis. Ut sit amet blandit mi.</p>

							<p>Fusce tincidunt pharetra mattis. Vivamus at orci odio. Morbi gravida orci ut lacus semper rutrum. Quisque nec lorem ex. Nunc rutrum efficitur feugiat. Mauris at scelerisque nibh. Curabitur id scelerisque mauris. Vivamus lacinia sapien eu venenatis porttitor. Cras tincidunt, metus quis aliquet vestibulum, felis purus volutpat urna, vel vestibulum arcu enim ultrices nulla. Sed dignissim facilisis lorem, ut iaculis enim mattis a. Suspendisse facilisis ipsum arcu, id faucibus elit gravida at. Curabitur vitae purus non arcu maximus tempus. Vivamus at velit justo. Fusce diam sem, tincidunt quis enim nec, consectetur dictum nulla.</p>

							<p>Cras finibus egestas enim, sit amet eleifend metus gravida rutrum. Quisque tempor nibh venenatis sollicitudin rhoncus. Phasellus venenatis tincidunt sagittis. Fusce efficitur felis ut iaculis convallis. Proin fermentum nulla et tortor ultricies, nec iaculis lorem laoreet. Proin lobortis pretium semper. Suspendisse potenti. Aenean maximus quis est eu imperdiet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus nec sapien nunc. Etiam pretium ex vitae pharetra pharetra. Donec quam nulla, porta in odio ac, venenatis malesuada augue. Sed ante metus, porttitor ut molestie sed, feugiat et massa.</p>

							<p>Suspendisse blandit, magna et imperdiet varius, dui lorem vehicula ex, id luctus risus sapien ac sem. Sed quis tincidunt justo. Fusce ut dolor nec diam tincidunt tristique. Vestibulum lobortis magna at sem commodo ullamcorper. Maecenas sit amet pharetra lorem. Aliquam erat volutpat. Morbi sit amet augue in velit sollicitudin semper vitae nec odio. Proin interdum nisl sed ipsum commodo auctor. In faucibus purus quis nulla porttitor mollis. Fusce dolor tortor, semper id placerat vitae, mollis a velit. Suspendisse at lacinia turpis. Aliquam semper, erat bibendum pulvinar rhoncus, turpis orci tempor enim, sit amet malesuada enim tortor quis quam. Vestibulum egestas sed dolor sed dapibus. Morbi efficitur libero at lorem hendrerit, quis eleifend diam finibus. Mauris semper justo eget tincidunt euismod. Phasellus consequat rutrum sem, non aliquam erat fringilla quis.</p>

							<p>Maecenas et urna est. Praesent interdum erat velit, pellentesque viverra ipsum semper nec. Duis sed ante sed nibh gravida vehicula quis et diam. Aenean placerat nisl non nunc convallis, eget luctus orci tempor. Phasellus non nibh tempor lacus laoreet tristique. Etiam id arcu est. Morbi interdum pellentesque est, eu congue lorem consequat non. Donec dapibus non augue at tempor. Curabitur vehicula nec nibh vitae consectetur. Aliquam fermentum turpis vitae libero aliquet, eu blandit erat commodo. Aenean purus dui, vestibulum eu auctor eget, viverra ut felis. In ac elit ultrices, vulputate eros eu, tristique mauris. Nulla facilisi. Pellentesque bibendum, nulla sed convallis convallis, erat dui placerat est, eget pulvinar ipsum mauris sit amet nisi.</p>

							<p>Donec sit amet aliquam sapien, vitae laoreet elit. Cras a diam nisl. Pellentesque pellentesque, dolor ut malesuada rutrum, augue tortor iaculis mi, nec pretium lorem enim a elit. Maecenas ornare, mauris at tincidunt ornare, nulla risus tincidunt eros, at faucibus quam sapien ut augue. Nunc hendrerit faucibus purus, et eleifend odio laoreet vitae. Aliquam erat volutpat. Suspendisse eros nibh, vulputate eu aliquet eu, tincidunt ut dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse felis odio, semper non ligula eget, auctor faucibus felis. Proin in erat arcu. Donec eget augue et libero ultrices porttitor. Phasellus scelerisque dui tortor, quis sodales eros malesuada vitae.</p>

							<p>Morbi vulputate vel nibh in fringilla. Mauris dictum urna nec fringilla molestie. Phasellus posuere bibendum egestas. Ut fermentum ligula fermentum mattis sodales. Integer a porttitor libero. Mauris vulputate faucibus risus, in vestibulum sapien fringilla eget. Ut volutpat, nulla iaculis condimentum faucibus, lectus ante commodo elit, ut placerat erat nisl vitae lacus. Phasellus eu nunc metus.</p>
						</Modal>
					</Fragment>
				)}
				</Toggle>

				<h3>Icon</h3>

				<p>Usage:</p>
				<pre>&lt;Icon name="close" color="#000" /&gt;</pre>

				<ul id="icon-demos">
				<li style={{ background: '#1ABC9C' }} title="arrow-up">
					<Icon name="arrow-up" color="#FFF" />
				</li>
				<li style={{ background: '#34495E' }} title="arrow-down">
					<Icon name="arrow-down" color="#FFF" />
				</li>
				<li style={{ background: '#F39C12' }} title="arrow-left">
					<Icon name="arrow-left" color="#FFF" />
				</li>
				<li style={{ background: '#9B59B6' }} title="arrow-right">
					<Icon name="arrow-right" color="#FFF" />
				</li>
				<li style={{ background: '#3498DB' }} title="close">
					<Icon name="close" color="#FFF" />
				</li>
				</ul>

				<h3>Loading</h3>

				<p>Made by <a href="https://samherbert.net/svg-loaders/">Sam Herbert</a> for everyone.</p>
				<p>Usage:</p>
				<pre>&lt;Loading name="tail-spin" color="#000" size="48" /&gt;</pre>

				<ul id="loading-demos">
				<li style={{ background: '#1ABC9C' }} title="audio">
					<Loading name="audio" />
				</li>
				<li style={{ background: '#34495E' }} title="rings">
					<Loading name="rings" />
				</li>
				<li style={{ background: '#F39C12' }} title="grid">
					<Loading name="grid" />
				</li>
				<li style={{ background: '#9B59B6' }} title="hearts">
					<Loading name="hearts" />
				</li>
				<li style={{ background: '#3498DB' }} title="oval">
					<Loading name="oval" />
				</li>
				<li style={{ background: '#E74C3C' }} title="three-dots">
					<Loading name="three-dots" />
				</li>
				<li style={{ background: '#2ECC71' }} title="spinning-circles">
					<Loading name="spinning-circles" />
				</li>
				<li style={{ background: '#2C3E50' }} title="puff">
					<Loading name="puff" />
				</li>
				<li style={{ background: '#F1C40F' }} title="circles">
					<Loading name="circles" />
				</li>
				<li style={{ background: '#8E44AD' }} title="tail-spin">
					<Loading name="tail-spin" />
				</li>
				<li style={{ background: '#2980B9' }} title="bars">
					<Loading name="bars" />
				</li>
				<li style={{ background: '#E74C3C' }} title="ball-triangle">
					<Loading name="ball-triangle" />
				</li>
				</ul>

			</div>
		);
	}
}

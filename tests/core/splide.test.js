import { minimum } from '../data/html';
import Splide from '../../src/js/splide';
import { DEFAULTS } from '../../src/js/constants/defaults';


describe( 'Splide ', () => {
	beforeEach( () => {
		document.body.innerHTML = minimum;
	} );

	test( 'should find an element with the given selector.', () => {
		const splide = new Splide( '#splide' );
		expect( splide.root.id ).toBe( 'splide' );
	} );

	test( 'should accept an element as a root on construction.', () => {
		const root   = document.getElementById( 'splide' );
		const splide = new Splide( root );
		expect( splide.root.id ).toBe( 'splide' );
	} );

	test( 'should overwrite default options with a given ones on construction.', () => {
		const splide = new Splide( '#splide', { perPage: 3 } );
		expect( splide.options ).toEqual( { ...DEFAULTS, perPage: 3 } );
	} );

	test( '"is" should verify if a given type is a current one.', () => {
		const splide = new Splide( '#splide', { type: 'loop' } ).mount();
		expect( splide.is( 'slide' ) ).toBe( false );
		expect( splide.is( 'loop' ) ).toBe( true );
	} );

	test( 'should make a root element visible after mount.', () => {
		const root = document.getElementById( 'splide' );
		root.style.visibility = 'hidden';

		const splide = new Splide( root );
		expect( splide.root.style.visibility ).toBe( 'hidden' );

		splide.mount();
		expect( splide.root.style.visibility ).toBe( 'visible' );
	} );
} );
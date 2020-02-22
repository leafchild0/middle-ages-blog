import App from './App.vue';
import { mount, shallowMount } from '@vue/test-utils';
import Vue from 'vue';

let wrapper;

beforeEach(() =>
{
	// Mount only needed component
	wrapper = shallowMount(App, {
		propsData: {},
	});
});

describe('App component', () =>
{
	test('should be Vue instance', () =>
	{
		expect(wrapper.isVueInstance).toBeTruthy();
	});

	test('should be mounted with default values', () =>
	{
		expect(wrapper.vm.posts).toEqual([]);
	});

	test('should add post in posts', () =>
	{
		const post = 'Hey hey';
		wrapper.vm.addPost(post);

		expect(wrapper.vm.posts.length).toEqual(1);
		expect(wrapper.vm.posts[0]).toEqual(post);
	});

	test('should add post in posts', async () =>
	{
		wrapper = mount(App, {
			propsData: {},
		});

		const button = wrapper.find('.submit');
		const textArea = wrapper.find('#message');

		textArea.setValue('New post');
		wrapper.vm.$children[0].message = 'New Post';
		button.trigger('click');

		// We should have this message in PostList component
		// In a dom
		await Vue.nextTick();
		expect(wrapper.html()).toContain('New post');
	});
});


import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import Vue from 'vue';
import Vuetify from 'vuetify';
import Service from "@/service";
import fetch from 'node-fetch';

Vue.use(Vuetify);

describe('Home.vue', () => {
    it('renders a toolbar at the top', () => {
        const wrapper = shallowMount(Home);
        expect(wrapper.find('#toolbar').exists()).toBe(true);
    });
})
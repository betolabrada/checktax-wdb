declare module 'vue-bootstrap-typeahead' {

    import {Component} from "vue";

    interface Props {
        data: any[];
        serializer?: (input: string) => string;
        size?: 'sm' | 'lg';
        backgroundVariant?: string;
        textVariant?: string;
        inputClass?: string;
        maxMatches?: number;
        minMatchingChars?: number;
        prepend?: string;
        append?: string;
    }

    const VueBootstrapTypeahead: Component<any, any, any, Props>;

    export default VueBootstrapTypeahead;
}
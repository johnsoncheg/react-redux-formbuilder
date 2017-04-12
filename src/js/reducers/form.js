import {
    ADD_TEXT,
    REMOVE_COMPONENT,
    FOCUS_COMPONENT,
    SET_LABEL,
    SET_VALUE,
    SET_REQUIRED,
    BLUR_COMPONNET,
    ADD_TEXTAREA,
    ADD_NUMBER,
    ADD_RADIO,
    ADD_CHECKBOX,
    ADD_DROPDOWN,
    SET_NAME,
    INSERT_RADIO,
    REMOVE_RADIO,
    SAVE_NAME,
    SAVE_DESCRIPTION,
    FOCUS_HEADER,
    BLUR_HEADER,
    FETCH_FIELD,
    RECEIVE_FIELD,
    RECEIVE_FIELD_ERROR,
    DELETE_FIELD
} from '../actions/actionsTypes.js'


const init = {
    symbol: null,
    header: {
        name: "未命名表单名称",
        description: '未添加表单描述',
        edit: false
    },
    fields: []
};

const header = function (state = init.header, action) {
    switch (action.type) {
        case FOCUS_HEADER:
            return {
                ...state,
                edit: true
            }
        case BLUR_HEADER:
            return {
                ...state,
                edit: false
            }
        case SAVE_NAME:
            return {
                ...state,
                name: action.name
            }

        case SAVE_DESCRIPTION:
            return {
                ...state,
                description: action.description
            }
        default:
            return state
    }
}

const form = function(state = init.fields, action) {
    switch (action.type) {
        case ADD_TEXT:
            return [
                ...state,
                {
                    view_id: state.reduce((maxId, field) => Math.max(field.view_id, maxId), -1) + 1,
                    label: '未命名',
                    field_type: 'single_line_text',
                    value: '',
                    required: false,
                    validations: {},
                    selected: false
                }
            ]
        case ADD_TEXTAREA:
            return [
                ...state,
                {
                    view_id: state.reduce((maxId, field) => Math.max(field.view_id, maxId), -1) + 1,
                    label: '未命名',
                    field_type: 'paragraph_text',
                    value: '',
                    required: false,
                    validations: {},
                    selected: false
                }
            ]
        case ADD_NUMBER:
            return [
                ...state,
                {
                    view_id: state.reduce((maxId, field) => Math.max(field.view_id, maxId), -1) + 1,
                    label: '未命名',
                    field_type: 'number',
                    value: '',
                    required: false,
                    validations: {},
                    selected: false
                }
            ]

        case ADD_RADIO:
            return [
                ...state,
                {
                    view_id: state.reduce((maxId, field) => Math.max(field.view_id, maxId), -1) + 1,
                    label: '未命名',
                    field_type: 'single_choice',
                    required: false,
                    validations: {},
                    selected: false,
                    options: [
                        {
                            name: "选项一",
                            value: Math
                                .random()
                                .toString(36)
                                .substr(2, 6)
                        }, {
                            name: '选项二',
                            value: Math
                                .random()
                                .toString(36)
                                .substr(2, 6)
                        }, {
                            name: '选项三',
                            value: Math
                                .random()
                                .toString(36)
                                .substr(2, 6)
                        }
                    ]
                }
            ]

        case ADD_CHECKBOX:
            return [
                ...state,
                {
                    view_id: state.reduce((maxId, field) => Math.max(field.view_id, maxId), -1) + 1,
                    label: '未命名',
                    field_type: 'multiple_choice',
                    required: false,
                    validations: {},
                    selected: false,
                    options: [
                        {
                            name: "选项1",
                            value: Math
                                .random()
                                .toString(36)
                                .substr(2, 7)
                        }, {
                            name: '选项2',
                            value: Math
                                .random()
                                .toString(36)
                                .substr(2, 7)
                        }, {
                            name: '选项3',
                            value: Math
                                .random()
                                .toString(36)
                                .substr(2, 7)
                        }
                    ]
                }

            ]


        case ADD_DROPDOWN:
            return [
                ...state,
                {
                    view_id: state.reduce((maxId, field) => Math.max(field.view_id, maxId), -1) + 1,
                    label: '未命名',
                    field_type: 'drop_down',
                    required: false,
                    validations: {},
                    selected: false,
                    options: [
                        {
                            name: "下拉选项命",
                            value: Math
                                .random()
                                .toString(36)
                                .substr(2, 7)
                        }, {
                            name: '下拉选项命',
                            value: Math
                                .random()
                                .toString(36)
                                .substr(2, 7)
                        }, {
                            name: '下拉选项命',
                            value: Math
                                .random()
                                .toString(36)
                                .substr(2, 7)
                        }
                    ]
                }

            ]
        case REMOVE_COMPONENT:
            return state.filter(field => field.view_id !== action.id)
        case FOCUS_COMPONENT:
            return state.map(field => field.view_id === action.id
                ? {
                    ...field,
                    selected: true
                }
                : {
                    ...field,
                    selected: false
                })

        case SET_LABEL:
            return state.map(field => field.selected
                ? {
                    ...field,
                    label: action.label
                }
                : field)
        case SET_VALUE:
            return state.map(field => field.selected
                ? {
                    ...field,
                    value: action.value
                }
                : field)
        case SET_REQUIRED:
            return state.map(field => field.selected
                ? {
                    ...field,
                    required: action.selected
                }
                : field)
        case BLUR_COMPONNET:
            return state.map(field => field.selected
                ? {
                    ...field,
                    selected: false
                }
                : field)
        case SET_NAME:
            return state.map(field => field.selected
                ? {
                    ...field,
                    options: field
                        .options
                        .map((item, index) => index === action.index
                            ? {
                                ...item,
                                name: action.name
                            }
                            : item)
                }
                : field)
        case INSERT_RADIO:
            return state.map(field => field.selected
                ? {
                    ...field,
                    options: field
                        .options
                        .slice(0, action.index + 1)
                        .concat({
                            name: field.field_type === 'single_choice' ? '新选项' : '新选项1',
                            value: field.field_type === 'single_choice'
                                ? Math
                                    .random()
                                    .toString(36)
                                    .substr(2, 6)
                                : Math
                                    .random()
                                    .toString(36)
                                    .substr(2, 7)
                        })
                        .concat(field.options.slice(action.index + 1))
                }
                : field)
        case REMOVE_RADIO:
            return state.map(field => field.selected
                ? {
                    ...field,
                    options: field
                        .options
                        .slice(0, action.index)
                        .concat(field.options.slice(action.index + 1))
                }
                : field)
        default:
            return state
    }
}


export default function fetchForm(state = init, action) {
    switch(action.type) {
        case FETCH_FIELD:
            return init
        case RECEIVE_FIELD:
            console.log(action.fields[0].name)
            return {
                symbol: action.fields[0].symbol || null,
                header: {
                    name: action.fields[0].name,
                    description: action.fields[0].description,
                    edit: false

                },
                fields: action.fields[0].fields
            }
        case RECEIVE_FIELD_ERROR:
            return init
        case DELETE_FIELD:
            return {
                symbol: null,
                header: {
                    name: "未命名表单名称",
                    description: '未添加表单描述',
                    edit: false
                },
                fields: []
            }
        default:
            return {
                ...state,
                header: header(state.header, action),
                fields: form(state.fields, action)
            }
    }
}


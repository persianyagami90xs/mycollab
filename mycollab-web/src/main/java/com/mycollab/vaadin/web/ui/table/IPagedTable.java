/**
 * Copyright © MyCollab
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
package com.mycollab.vaadin.web.ui.table;

import com.mycollab.common.TableViewField;
import com.mycollab.db.arguments.SearchCriteria;
import com.mycollab.vaadin.event.ApplicationEvent;
import com.mycollab.vaadin.event.HasPageableHandlers;
import com.mycollab.vaadin.event.HasSelectableItemHandlers;
import com.vaadin.ui.Component;
import com.vaadin.util.ReflectTools;
import com.vaadin.v7.ui.Table;

import java.io.Serializable;
import java.lang.reflect.Method;
import java.util.Collection;
import java.util.EventListener;
import java.util.List;
import java.util.Set;

/**
 * @author MyCollab Ltd.
 * @since 2.0
 */
public interface IPagedTable<S extends SearchCriteria, T> extends HasSelectableItemHandlers<T>, HasPageableHandlers, Component {

    int setSearchCriteria(S searchCriteria);

    Collection<T> getItems();

    void addTableListener(TableClickListener listener);

    void addGeneratedColumn(Object id, Table.ColumnGenerator generatedColumn);

    List<TableViewField> getDisplayColumns();

    T getBeanByIndex(Object itemId);

    void refresh();

    interface TableClickListener extends EventListener, Serializable {
        Method itemClickMethod = ReflectTools.findMethod(TableClickListener.class, "itemClick", TableClickEvent.class);

        void itemClick(TableClickEvent event);
    }

    class TableClickEvent extends ApplicationEvent {
        public static final String TABLE_CLICK_IDENTIFIER = "tableClickEvent";

        private static final long serialVersionUID = 1L;
        private String fieldName;
        private Object data;

        public TableClickEvent(IPagedTable source, Object data, String fieldName) {
            super(source);
            this.data = data;
            this.fieldName = fieldName;
        }

        public String getFieldName() {
            return fieldName;
        }

        public Object getData() {
            return data;
        }
    }
}